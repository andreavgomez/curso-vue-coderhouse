<template>
  <div>
    <!-- <p>Soy home page</p> -->
    <div class="row">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <div :id="libro.id" class="card" style="width: 18rem;">
          <img class="card-img-top img-fluid" style="height: 200px;" src="../assets/libroNuevo.jpg" :alt="libro.titulo">
          <!-- <img class="card-img-top img-fluid" style="height: 200px;" :src="libro.imagen" :alt="libro.titulo">           -->
          <div class="card-body">
            <h4 class="card-title">{{libro.titulo}}</h4>
            <p>Autor: {{libro.autor}}</p>
            <p>Precio: ${{libro.precio}}</p>
            <button class="btn btn-outline-success" @click="agregarAlCarrito(libro)">Agregar al carrito</button>      
          </div>
        </div>
      </div>
    </div>
    <CarritoComponent :carrito="carrito" />
  </div>
</template>

<script>
import CarritoComponent from "../components/CarritoComponent.vue"; 

export default {
  name: "HomePage",
  components: {
    CarritoComponent, 
  },
  data() {
    return {
      loading: false,
    //   users: [],
      libros: [],
      carrito: [],
    };
  },
  created() {
    this.getLibros();
  },
  methods: {
    agregarAlCarrito(libro) {
      libro.cantidad=1
      this.carrito.push(libro); 
      this.$emit("agregarAlCarrito", libro);
    },
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
