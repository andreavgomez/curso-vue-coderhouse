<template>
  <div>
    <p>Soy home page</p>
    <div class="row">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <div :id="libro.id" class="card" style="width: 18rem;">
          <img class="card-img-top img-fluid" style="height: 200px;" src="../assets/libroNuevo.jpg" :alt="libro.titulo">
          <div class="card-body">
            <h4 class="card-title">{{libro.titulo}}</h4>
            <p>Autor: {{libro.autor}}</p>
            <p>Precio: ${{libro.precio}}</p>
            <button id="" class="btn btn-outline-success">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      loading: false,
    //   users: [],
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
        });
    },
  },
};
</script>