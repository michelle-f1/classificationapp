import router from "../router";
const axios = require("axios");
const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  error: null
};

const getters = {
  //isLoggedIn: function(state){
  //  if(state.token != ''){
  //    return true
  //}else {
  //  return false
  //}
  //}
  isLoggedIn: (state) => !!state.token,
  authState: (state) => state.status,
  user: (state) => state.user,
};

const actions = {
  //Login
  async login({ commit }, user) {
    commit("auth_request");
    try{
      let res = await axios.post("/api/users/login", user);
    if (res.data.success) {
      const token = res.data.token;
      const user = res.data.user;
      // token stored in localstorage
      localStorage.setItem("token", token);
      //set axios defaults
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", token, user);
    }
    //response back to component
    return res;
    } catch (err){
      commit('auth_error', err);
    }
  },
  //actions for registration
  async register({
    commit
  }, userData){
    commit('register_request');
    try{
      let res = await axios.post('/api/users/register', userData);
    if(res.data.success !== undefined){
      commit('register_success');
    }
    return res;
    }catch(err){
      commit('register_error', err);
    }
  },
  //profile
  async getProfile({commit}){
    commit('profile_request')
    let res = await axios.get('/api/users/profile')
    commit('user_profile', res.data.user)
    return res;
  },
  //loging off the user
  //using logoff in the Navbar component
  async logout({commit}){
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization']; //remove default token created by axios
    router.push('/login');
    return
  },
  //actions for updating
  async update({
    commit
  }, userData){
    commit('update_request');
    try{
      let res = await axios.update('/api/users/edit', userData);
      if(res.data.success !== undefined){
        commit('update_success');
      }
      return res;
    }catch(err){
      commit('update_error', err);
    }
  }
};

const mutations = {
  auth_request(state) {
    state.error = null
    state.status = "loading"
  },
  auth_success(state, token, user) {
    state.token = token
    state.user = user
    state.status = "success"
    state.error = null
  },
  auth_error(state, err){
    state.error = err.response.data.msg
  },
  register_request(state){
    state.status = 'loading'
    state.error = null
  },
  register_success(state){
    state.status = "success"
    state.error = null
  },
  registration_error(state, err){
    state.error = err.response.data.msg
  },
  logout(state){
    state.error = null
    state.status = ""
    state.token = ""
    state.user = ""
  },
  profile_request(state){
    state.status = "loading"
  },
  user_profile(state, user){
    state.user = user
  },
  update_request(state){
    state.status ="loading"
    state.error = null
  },
  update_success(state){
    state.status ="success"
    state.error = null
  },
  update_error(state, err){
    state.error = err.response.data.msg
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
