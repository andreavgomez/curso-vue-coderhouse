<template>
  <div class="home-component">
    <div class="row">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <div :id="libro.id" class="card">
          <img class="card-img-top img-fluid" :src="require(`@/assets/${libro.imagen}`)" :alt="libro.titulo" style="height: 200px" />
          <!-- <img class="card-img-top img-fluid" :src="require('@/assets/libroNuevo.jpg')" :alt="libro.titulo" style="height: 200px" /> -->
          <!-- <img class="card-img-top img-fluid" :src="libro.imagen" :alt="libro.titulo" style="height: 200px" /> -->
          <!-- <img class="card-img-top img-fluid" style="height: 200px;" :src="libro.imagen" :alt="libro.titulo">           -->
          <!-- <img class="card-img-top img-fluid" style="height: 200px;" src={{libro.imagen}} :alt="libro.titulo">           -->
          <div class="card-body">
            <h4 class="card-title">{{ libro.titulo }}</h4>
            <p>Autor: {{ libro.autor }}</p>
            <p>Precio: ${{ libro.precio }}</p>
            <button class="btn btn-primary" @click="agregarAlCarrito(libro)">
              <i class="bi bi-cart bi-size"></i>
            </button>
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
      libros: [],
      carrito: [],
    };
  },
  created() {
    this.getLibros();
  },
  methods: {
    findById(id) {
      return this.carrito.find((item) => item.id === id);
    },
    agregarAlCarrito(libro) {
      libro.cantidad = 1;

      const enCarrito = this.findById(libro.id);

      if (!enCarrito) {
        this.carrito.push(libro);
      } else {
        console.log(`El libro ya existe en el carrito`);
        alert("El libro ya existe en el carrito");
      }
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

<style>
.home-component {
  margin: 120px auto 0; /* Agrega un margen superior de 100px */
}

.card {
  width: 18rem;
  margin-bottom: 20px;
}

.card-img-top {
  height: 200px;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  margin-top: 10px;
  margin-bottom: 0;
}

.card-body p {
  margin-bottom: 5px;
}

.btn-primary {
  margin-top: 10px;
}
</style>
