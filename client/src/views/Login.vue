<template>
  <div>
    <h2>Login</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="username">Enter Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                v-model="username"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Enter Password</label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                v-model="password"
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/register" class="card-link"
              >Not Registered yet?</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      name: "",
      password: "",
      confirm_password: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.card {
  width: 80%;
  border-radius: 15px;
}
.btn {
  /*border: 1px solid  rgb(77, 76, 76);
    border-radius: 2px;*/
  box-shadow: 1px 1.5px #e6f2ff;

  background-color: cornflowerblue;
}
.form-control {
  border-radius: 2px;
  box-shadow: 2px 2.5px #e6f2ff;
}
.router_link {
  display: flex;
}
</style>
