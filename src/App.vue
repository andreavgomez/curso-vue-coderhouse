<template>
  <div id="app">    
    <!-- <button @click="openModal">Abrir Modal</button> -->
    <NavbarComponent/>    
    <!-- <HeaderBar /> -->
    <router-view />
  </div>
</template>

<script>
// import HeaderBar from './components/HeaderBar.vue'
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'App',
  // data() {
  //   return {
  //     showModal: false
  //   };
  // },
  components: {
    // HeaderBar,
    NavbarComponent
  },
//  methods: {
//     openModal() {
//       this.showModal = true
//       console.log(`modal: ${this.showModal}`);
//     }
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
