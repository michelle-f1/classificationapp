import router from "../router";
const axios = require("axios");
const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
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
    commit("auth-request");
    let res = await axios.post("http://localhost:5000/api/users/login", user);
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
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, token, user) {
    state.token = token;
    state.user = user;
    state.status = "success";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
