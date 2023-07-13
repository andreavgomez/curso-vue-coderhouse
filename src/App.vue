<template>
  <div id="app">
<<<<<<< HEAD
    <NavbarComponent />
    <ListadoComponentVue :libros="listado" />
    <LoginComponent v-show="mostrarComponenteLogin"/> 
    <CarritoComponent />
    <FooterComponent />
=======
    <!-- <NavbarComponent :carrito="carrito" @open-modal="openModal" /> -->
    <!-- <NavbarComponent :carrito="carrito" @open-modal="handleOpenModal" /> -->
    <NavbarComponent />
    <!-- <CarritoComponent :carrito="carrito" :show-modal="showModal" @close-modal="closeModal" /> -->
    <CarritoComponent />
    <router-view />
>>>>>>> 9971a3b24163a9c43e446ff2566f0f7bbdef207b
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
import CarritoComponent from './components/CarritoComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      // carrito: [],
      // showModal: false,
    };
  },
  methods: {
    // openModal() {
    //   this.showModal = true;
    //   console.log(this.showModal)
    // },    
    // closeModal() {
    //   this.showModal = false;
    //   console.log(this.showModal)
    // },
    // handleOpenModal() {
    //   this.showModal = true;
    // },    
  },
  components: {
    CarritoComponent,
    NavbarComponent,
  },
};
</script>
>>>>>>> 9971a3b24163a9c43e446ff2566f0f7bbdef207b
