<template>
  <div id="app">
    <h2>FormularioVUE cli:</h2>    
    <FormularioComponent @submitForm="agregarDato" />
    <h2>Datos ingresados:</h2>
    <TableComponent :datos="datos"/>
    <button @click="limpiarTabla">Limpiar tabla</button>
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
      datos: [],
    };
  },  
  methods: {
    agregarDato(nuevoDato) {
      this.datos.push(nuevoDato);
    },
    limpiarTabla() {
      this.datos = [];
    },
  },
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

  .container {
  max-width: 600px;
  margin: 0 auto;
}
}
</style>
