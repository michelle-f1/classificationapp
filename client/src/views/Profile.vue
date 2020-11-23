<template>
  <div>
    <h2><img src="../assets/team.gif" width="90" height="80" >User Profile Overview</h2>
    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Username:{{user.username}}</li>
        <li class="list-group-item">Name:{{user.name}}</li>
        <li class="list-group-item">Email:{{user.email}}</li>
      </ul>
    </div>

    <div class="card" style="width:600px">
      <div class="card-header text-white bg-dark" style="margin: 20px">
        <h3>Select an option below to Edit Profile or Upload files</h3>
      </div>
       <router-link to="/edit" class="nav-link">Edit Profile</router-link>
       <router-link to="/uploadfiles" class="nav-link">Upload File</router-link>
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
//import UploadFiles from "../components/UploadFiles";

export default {
  computed: mapGetters(['user']),
  methods:{
    ...mapActions(['getProfile'])
  },
  created() {
    this.getProfile();
  },
  //name:"App",
  //components:{
    //UploadFiles
  //}
};
</script>

<style>
.container{
  padding: 20px;
  border-block: 2px;
}
.card{
  width: 80%;
  border-radius: 0px;
}
.h3{
  font-size: 20px;
}
</style>
