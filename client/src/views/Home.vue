<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Data Classification App</h1>
        <p class="lead"> Use this Application to authenticate users and to classify or modify data </p>
      </div>
    </div>
    <div class="rows">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-dark text-white">
          <div class="card-body">
            <h5 class="card-header"> MongoDB </h5>
            <p class="card-content">MongoDB stores all the user information</p> 
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-danger text-white">
          <div class="card-body">
            <h5 class="card-header"> Node </h5>
            <p class="card-content">Nodejs used for the backend, using Javascript</p> 
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-info text-white">
          <div class="card-body">
            <h5 class="card-header"> Vue </h5>
            <p class="card-content">NVuejs used to create the frontend.</p> 
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-danger text-white">
          <div class="card-body">
            <h5 class="card-header"> Express </h5>
            <p class="card-content">The framework for the application</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
