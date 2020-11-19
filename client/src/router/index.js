import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import store from '../store'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/Login.vue"),
      meta:{
        requiresGuest: true
      }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import( "../views/Register.vue"),
      meta:{
        requiresGuest: true
      }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import("../views/Profile.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path:"/edit",
    name: "edit",
    component: () =>
      import("../views/Edit.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path:"/uploadfiles",
    name: "uploadfiles",
    component: () =>
      import("../components/UploadFiles.vue"),
      meta:{
        requiresAuth: true
      }
  }
];

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      next('/login');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      next('/profile');
    } else {
      next();
    }
  }
});
export default router;
