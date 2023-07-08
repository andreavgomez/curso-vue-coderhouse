import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import LoginComponent from "./components/Login.vue"


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/carrito", component: CarritoComponent ,name: "CarritoComponent"},  
  { path: "/login", component: LoginComponent ,name: "LoginComponent"},  
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
