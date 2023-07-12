<template>
  <div class="eliminar-producto container">
    <h1>Eliminar Producto</h1>
    <div class="producto-info">
      <h3>Título: {{ producto.titulo }}</h3>
      <p>Autor: {{ producto.autor }}</p>
      <p>Precio: ${{ producto.precio }}</p>
      <p>Imagen: {{ producto.imagen }}</p>
    </div>
    <button class="btn btn-danger" @click="eliminarProducto">Eliminar</button>
  </div>
</template>

<script>
export default {
  name: "EliminarProducto",
  data() {
    return {
      producto: {},
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getProducto(id);
  },
  methods: {
    getProducto(id) {
      fetch(`https://649e5806245f077f3e9c4bc1.mockapi.io/libros/${id}`)
        .then((res) => res.json())
        .then((producto) => {
          this.producto = producto;
        })
        .catch((error) => {
          console.log("Error al obtener el producto:", error);
        });
    },
    eliminarProducto() {
      const id = this.$route.params.id;
      fetch(`https://649e5806245f077f3e9c4bc1.mockapi.io/libros/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          console.log("Producto eliminado");
          this.$router.push("/productos");
        })
        .catch((error) => {
          console.log("Error al eliminar el producto:", error);
        });
    },
  },
};
</script>

<style scoped>
.eliminar-producto {
  margin-top: 100px;
}

.producto-info {
  margin-bottom: 20px;
}

.btn-danger {
  margin-right: 5px;
}
</style>
