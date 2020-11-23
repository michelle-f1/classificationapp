//create and initialize dependencies
const express = require("express"); //required for api
const mongoose = require("mongoose"); //required for database
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

//initialization of the app
const app = express();

//some middleware used for the classification app
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors());

//path modules
app.use(express.static(path.join(__dirname, "public"))); //setting static directory as the public folder

//passport
app.use(passport.initialize());
//get the strategy from passport
require("./config/passport")(passport);

//get the database configuration file
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connection successfully established " + db);
  })
  .catch((err) => {
    console.log("Unable to establish connection to the database " + err);
  });

//app.get('/', (req, res) => {
//    return res.send("<h1>Hello World</h1>")
//});
//get the users route
const users = require("./routes/api/users");

app.use("/api/users", users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
