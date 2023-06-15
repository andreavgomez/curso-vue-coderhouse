<template>
  <div id="app">
    <NavbarComponent />
    <ListadoComponentVue :libros="listado" />
    <LoginComponent v-show="mostrarComponenteLogin"/> 
    <CarritoComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListadoComponentVue from "./components/ListadoComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";

import libros from "@/assets/json/libros.json";

export default {
  name: "App",
  components: {
    NavbarComponent,
    ListadoComponentVue,
    CarritoComponent,
    FooterComponent,
    LoginComponent,
  },
  data() {
    return {
      listado: libros,
      mostrarComponenteLogin: false,
    };
  },
};
</script>

<style></style>
