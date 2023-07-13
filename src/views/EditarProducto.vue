<template>
  <div class="editar-producto container">
    <h1>Editar Producto</h1>
    <form @submit.prevent="guardarCambios">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" id="titulo" v-model="producto.titulo" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="autor">Autor</label>
        <input type="text" id="autor" v-model="producto.autor" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" id="precio" v-model.number="producto.precio" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="imagen">Imagen</label>
        <input type="text" id="imagen" v-model="producto.imagen" class="form-control" required>
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
        autor: "",
        precio: 0,
        imagen: "",
      },
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
    guardarCambios() {
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
          this.$router.push("/productos");
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

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 5px;
}
</style>
