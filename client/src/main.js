import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import { mount } from '@vue/test-utils'
//import axios from 'axios'
//const axios = require('axios');

//const instance = axios.create({
//  baseURL: 'http://localhost:8080/'
//});

//const app = createApp({})
//app.use(App)
//app.use(store)
//app.use(router)
//app.use(axios)
//mount(app)
//app.mount('#app');
//app.config.globalProperties.$http = () => { instance }
//createApp(App).congig.globalProperties.$http = () => {instance}
//const token = localStorage.getItem("token");
//get the token if there is one
//if(token) {
//app.prototype.$http.defaults.headers.common['Authorization'] = token;
//instance.defaults.headers.common['Authorization'] = token;
//}

createApp(App).use(store).use(router).mount("#app");
//app.mount('#app')
