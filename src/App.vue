<template>
  <div id="app">
    <!-- <AnAlbum />
    <hr /> -->
   <!-- <ContactForm />    
    <hr /> -->
   <FormularioComponent />
    <hr />
  </div>
</template>

<script>
// import AnAlbum from "./components/AnAlbum.vue"
// import ContactForm from './components/ContactForm.vue'
import FormularioComponent from './components/FormularioComponent.vue'

export default {
  name: 'App',
  components: {
    // AnAlbum,
    // ContactForm,
    FormularioComponent,
  }
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
