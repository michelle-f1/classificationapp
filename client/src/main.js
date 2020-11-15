import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import Vue from 'vue'
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
//get the token if there is one
if(token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}



createApp(App).use(store).use(router).mount('#app')
