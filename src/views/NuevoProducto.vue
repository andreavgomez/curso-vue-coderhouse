<template>
  <div class="nuevo-producto container">
    <h1>Nuevo Producto</h1>
    <form @submit.prevent="guardarProducto">
      <div class="form-group">
        <label for="titulo">Título</label>
        <input type="text" id="titulo" v-model="nuevoProducto.titulo" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="autor">Autor</label>
        <input type="text" id="autor" v-model="nuevoProducto.autor" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input type="number" id="precio" v-model.number="nuevoProducto.precio" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="imagen">Imagen</label>
        <input type="text" id="imagen" v-model="nuevoProducto.imagen" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Guardar Producto</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NuevoProducto",
  data() {
    return {
      nuevoProducto: {
        titulo: "",
        autor: "",
        precio: 0,
        imagen: "",
      },
    };
  },
  methods: {
    guardarProducto() {
      fetch("https://649e5806245f077f3e9c4bc1.mockapi.io/libros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.nuevoProducto),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Nuevo producto guardado:", data);
          this.$router.push("/productos");
        })
        .catch((error) => {
          console.log("Error al guardar el nuevo producto:", error);
        });
    },
  },
};
</script>

<style scoped>
.nuevo-producto {
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
