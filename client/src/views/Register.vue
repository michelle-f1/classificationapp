<template>
  <div>
    <h2>Register</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-dark">
          <h4>Registration</h4>
        </div>
        <div class="card-body">
          <form>
            <!--Username-->
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
            <!--Firstname-->
            <div class="form-group">
              <label for="name">Enter Firstname</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
              />
            </div>
            <!--Email-->
            <div class="form-group">
              <label for="username">Enter Email Address</label>
              <input
                id="email"
                type="text"
                placeholder="example@gmail.com"
                name="email"
                v-model="email"
                class="form-control"
              />
            </div>
            <!--Password-->
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
            <!--Confirm password-->
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                type="confirm_password"
                class="form-control"
                placeholder="Re-enter Password"
                name="confirm_password"
                v-model="confirm_password"
              />
            </div>
            <button class="btn btn-primary">Complete Registration</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link"
              >Already have an existing account?</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  width: 80%;
  border-radius: 15px;
  display: flex;
}
.btn {
  /*border: 1px solid  rgb(77, 76, 76);
    border-radius: 2px;*/
  box-shadow: 1px 1.5px #e6f2ff;
  /*display: flex;*/
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
