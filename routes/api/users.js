const express = require("express");
const router = express.Router();
//hash passwords
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys").secret;
const passport = require("passport"); //used to predict routes
const User = require("../../model/User");
//for profile update use mongo id
const ObjectID = require('mongodb').ObjectID;

/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post("/register", (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Password and confirm-password do not match", //password match check sending response if no match
    });
  }
  //validate username
  User.findOne({
    username: username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "This username is already in use.",
      });
    }
  });
  //validate email
  User.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "This email has already been registered.",
      });
    }
  });
  //If nothing goes wrong then the new user can be registered
  let newUser = new User({
    name,
    username,
    password,
    email,
  });
  //hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: "User has been registered.",
        });
      });
    });
  });
});

/**
 * @route POST api/users/login
 * @desc Signing in the user
 * @access Public
 */
router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username entered not found",
        success: false,
      });
    }
    //user found now validate password
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //JSONtoken should be sent to user
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        //using jwt package
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 604800, //token expiretion
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              user: user,
              token: "Bearer " + token,
              msg: "Login Successful!", //message to indicate successful login
            });
          }
        );
      } else {
        return res.status(404).json({
          msg: "Incorrect password entered.",
          success: false,
        });
      }
    });
  });
});

/**
 * @route POST api/users/profile
 * @desc Return user data
 * @access Private
 */
router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

/**
 * @route POST api/users/edit
 * @desc edit user data
 * @access Private
 */
router.post('/edit', (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username entered not found",
        success: false
      });
    }else {
      const users = req.app.locals.users;
      const _id = ObjectID(req.session.passport.user);
      users.updateOne({_id}, {$set: {name, username, email, password}}, (err)=> {
        if (err){
          throw err;
        }
        res.redirect('/profile');
      });
    }
  });

});

module.exports = router;
