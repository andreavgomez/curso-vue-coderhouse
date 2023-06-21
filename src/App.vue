<template>
  <div id="app">
    <h1>Formulario Vue-Cli</h1>    
    <FormularioComponent @submitForm="agregarInfo" />
    <TableComponent :info="info"/>
  </div>
</template>

<script>
import FormularioComponent from './components/FormularioComponent.vue';
import TableComponent from './components/TableComponent.vue';


export default {
  name: 'App',
  components: {
    FormularioComponent,
    TableComponent,
  },
  data() {
    return {
      info: [],
      // headers: ["name", "surname", "email", "document", "extra", "actions"],
    };
  },  
  methods: {
    agregarInfo(formstate) {
      this.info.push(formstate);
      console.log(this.info.value);
    },  
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
