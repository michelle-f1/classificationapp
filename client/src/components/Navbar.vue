<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">Data Classification</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link"> About </router-link>
        </li>

        <!--Login-->
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>

        <!--Profile-->
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/profile" class="nav-link">User Profile</router-link>
        </li>

        <!--Edit Profile-->
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/edit" class="nav-link">Edit Profile</router-link>
        </li>

        <!--Upload File-->
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/uploadfiles" class="nav-link">Upload File</router-link>
        </li>

        <!--Register-->
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        

        <!--Logout-->
        <li class="nav-item" v-if="isLoggedIn">
          <a to="/logout" class="nav-link" @click.prevent= "logoutUser">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser(){
      this.logout();
    }
  }
};
</script>

<style scoped></style>
