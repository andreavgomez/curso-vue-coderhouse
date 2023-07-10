import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./views/HomePage.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import LoginComponent from "./components/Login.vue";
import RegistrationComponent from "./components/Registration.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import ProductosComponent from "./views/ProductosComponent.vue";
import EditarProducto  from "./views/EditarProducto.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/carrito", component: CarritoComponent ,name: "CarritoComponent"},  
  { path: "/login", component: LoginComponent ,name: "LoginComponent"},  
  { path: "/Registration", component: RegistrationComponent ,name: "RegistrationComponent"},    
  { path: "/Navbar", component: NavbarComponent ,name: "NavbarComponent"},  
  { path: "/productos", component: ProductosComponent, name: "ProductosComponent" },
  { path: "/nuevo-producto", component: EditarProducto, name: "EditarProducto" },

];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
