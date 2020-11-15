<template>
    <div>
        <h2>Login</h2>
        <div class="row">
            <div class="card mx-auto"> 
                <div class="card-header text-white bg-dark">
                    <h4>Login</h4>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="username">Enter Username</label>
                            <input id="username" type="text" placeholder="Username" name="username" v-model="username" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Enter Password</label>
                            <input id="password" type="password" class="form-control" placeholder="Password" name="password" v-model="password">
                        </div>
                        <button class="btn btn-primary">Login</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/register" class="card-link">Not Registered yet?</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        username: "",
        name: "",
        password: "",
        confirm_password: "",
        email: ""
        };
    }
}
</script>

<style>
.card{
    width : 80%;
    border-radius: 15px;
    
}
.btn{
    /*border: 1px solid  rgb(77, 76, 76);
    border-radius: 2px;*/
    box-shadow: 1px 1.5px #e6f2ff;
    
    background-color: cornflowerblue;
}
.form-control{
    border-radius: 2px;
    box-shadow: 2px 2.5px #e6f2ff;
}
.router_link{
    display: flex;
}
</style>