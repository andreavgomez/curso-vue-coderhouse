<template>
  <div class="productos-component">
    <h1>Productos</h1>
    <router-link to="/nuevo-producto" class="btn btn-primary mb-3">Nuevo Producto</router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros" :key="libro.id" style="background-color: white;">
          <td>{{ libro.titulo }}</td>
          <td>{{ libro.precio }}</td>
          <td>
            <button @click="editarLibro(libro)" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-fill"></i>
            </button>
            <button @click="eliminarLibro(libro)" class="btn btn-sm btn-danger">
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductosComponent",
  data() {
    return {
      libros: [],
    };
  },
  created() {
    this.getLibros();
  },
  methods: {
    getLibros() {
      this.loading = true;
      fetch("https://649e5806245f077f3e9c4bc1.mockapi.io/libros")
        .then((res) => res.json())
        .then((libros) => {
          this.libros = libros;
          this.loading = false;
        })
        .catch((error) => {
          console.log("Error al obtener los libros:", error);
          this.loading = false;
        });
    },
    editarLibro(libro) {
      this.$router.push({ name: "EditarProducto", params: { id: libro.id } });
    },
    eliminarLibro(libro) {
      // Realizar llamada a la API para eliminar el libro
      console.log("Eliminar libro:", libro);
    },
  },
};
</script>

<style scoped>
.productos-component {
  margin-top: 100px;
}
</style>
