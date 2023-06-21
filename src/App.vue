<template>
  <div id="app">
    <h2>FormularioVUE cli:</h2>
    <FormularioComponent @submitForm="agregarDato" />
    <h2>Datos ingresados:</h2>
    <TablaComponent :datos="datos" />
    <button @click="limpiarTabla">Limpiar tabla</button>
  </div>
</template>

<script>
import FormularioComponent from "./components/FormularioComponent.vue";
import TablaComponent from "./components/TablaComponent.vue";

export default {
  name: "App",
  components: {
    FormularioComponent,
    TablaComponent,
  },
  data() {
    return {
      datos: [],
    };
  },
  methods: {
    agregarDato(nuevoDato) {
      this.datos.push(nuevoDato);
      this.$refs.formulario.resetForm(); // Llamar al método para restablecer el formulario desde el componente hijo
     },
  // methods: {
  //   agregarDato(nuevoDato) {
  //     this.datos.push(nuevoDato);
  //   },
    limpiarTabla() {
      this.datos = [];
    },
  },
};
</script>
