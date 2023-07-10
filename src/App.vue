<template>
  <div id="app">
    <!-- <NavbarComponent :carrito="carrito" @open-modal="openModal" /> -->
    <NavbarComponent :carrito="carrito" @open-modal="handleOpenModal" />
    <CarritoComponent :carrito="carrito" :show-modal="showModal" @close-modal="closeModal" />
    <router-view />
  </div>
</template>

<script>
import CarritoComponent from './components/CarritoComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      carrito: [],
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      console.log(this.showModal)
    },    
    closeModal() {
      this.showModal = false;
      console.log(this.showModal)
    },
    handleOpenModal() {
      this.showModal = true;
    },    
  },
  components: {
    CarritoComponent,
    NavbarComponent,
  },
};
</script>
