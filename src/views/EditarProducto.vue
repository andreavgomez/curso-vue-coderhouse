<template>
  <div class="editar-producto">
    <h1>Editar Producto</h1>
    <form @submit.prevent="guardarCambios">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" id="titulo" v-model="producto.titulo" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" id="precio" v-model="producto.precio" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditarProducto",
  data() {
    return {
      producto: {
        titulo: "",
        precio: 0,
      },
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getProducto(id);
  },
  methods: {
    getProducto(id) {
      // Realizar llamada a la API para obtener los datos del producto según el ID
      fetch(`https://649e5806245f077f3e9c4bc1.mockapi.io/libros/${id}`)
        .then((res) => res.json())
        .then((producto) => {
          this.producto = producto;
        })
        .catch((error) => {
          console.log("Error al obtener el producto:", error);
        });
    },
    guardarCambios() {
      // Realizar llamada a la API para guardar los cambios en el producto
      const id = this.$route.params.id;
      fetch(`https://649e5806245f077f3e9c4bc1.mockapi.io/libros/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.producto),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Cambios guardados:", data);
          // Realizar alguna acción después de guardar los cambios
        })
        .catch((error) => {
          console.log("Error al guardar los cambios:", error);
        });
    },
  },
};
</script>

<style scoped>
.editar-producto {
  margin-top: 100px;
}
</style>
