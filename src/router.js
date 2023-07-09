import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import LoginComponent from "./components/Login.vue";
import RegistrationComponent from "./components/Registration.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/carrito", component: CarritoComponent ,name: "CarritoComponent"},  
  { path: "/login", component: LoginComponent ,name: "LoginComponent"},  
  { path: "/Registration", component: RegistrationComponent ,name: "RegistrationComponent"},    
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
