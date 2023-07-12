<template>
  <div class="home-component">
    <div class="row">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <div :id="libro.id" class="card">
          <img
            class="card-img-top img-fluid"
            :src="require(`@/assets/${libro.imagen}`)"
            :alt="libro.titulo"
            style="height: 200px"
          />
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
    <!-- <CarritoComponent :carrito="carrito" :showModal="showModal" /> 
    <CarritoComponent
      :carrito="carrito"
      :showModal="showModal"
      @open-modal="openModal"
      @close-modal="closeModal"
    />
    -->
  </div>
</template>

<script>
// import CarritoComponent from "../components/CarritoComponent.vue";
import store from "../store.js";

export default {
  name: "HomePage",
  components: {
    // CarritoComponent,
  },
  data() {
    return {
      loading: false,
      libros: [],
      // carrito: [],
      showModal: false,
      storeState: store.state,
    };
  },
  created() {
    this.getLibros();
  },
  methods: {
    openModal() {
      this.showModal = true;
      console.log(this.showModal);
    },
    closeModal() {
      this.showModal = false;
      console.log(this.showModal);
    },
    findById(id) {
      return this.storeState.carrito.find((item) => item.id === id);
    },
    agregarAlCarrito(libro) {
      libro.cantidad = 1;

      const enCarrito = this.findById(libro.id);

      if (!enCarrito) {
        this.storeState.carrito.push(libro);
      } else {
        console.log(`El libro ya existe en el carrito`);
        alert("El libro ya existe en el carrito");
      }
    },
    getLibros() {
      this.loading = true;
      // fetch("https://649e5806245f077f3e9c4bc1.mockapi.io/libros")
      //   .then((res) => res.json())
      //   .then((libros) => {
      //     this.libros = libros;
      //     this.loading = false;
      //   });
      this.libros = [
        {
          autor: "Jorge Luis Borges",
          titulo: "Aleph",
          precio: 900,
          imagen: "AlephBorges.jpg",
          id: "1",
        },
        {
          autor: "Gabriel García Marquez",
          titulo: "Cien años de Soledad",
          precio: 4500,
          imagen: "CienSoledadMarquez.jpg",
          id: "2",
        },
        {
          autor: "Isabel Allende",
          titulo: "Paula",
          precio: 2800,
          imagen: "PaulaAllende.jpg",
          id: "3",
        },
        {
          autor: "Jorge Luis Borges",
          titulo: "Ficciones",
          precio: 1400,
          imagen: "FiccionesBorges.jpg",
          id: "4",
        },
        {
          autor: "Mario Benedetti",
          titulo: "Andamios",
          precio: 2200,
          imagen: "AndamiosBenedetti.jpg",
          id: "5",
        },
        {
          autor: "Mario Vargas Llosa",
          titulo: "La ciudad y los perros",
          precio: 2000,
          imagen: "CiudadPerrosVargasLlosa.jpg",
          id: "6",
        },
        {
          autor: "Ronnie Wolff",
          titulo: "Aprender JS",
          precio: 3400,
          imagen: "libroNuevo.jpg",
          id: "7",
        },
        {
          autor: "Felix Blanco",
          titulo: "Aprender Vue js",
          precio: 5300,
          imagen: "libroNuevo.jpg",
          id: "8",
        },
        {
          autor: "Neal Veum",
          titulo: "Aprender html",
          precio: 2300,
          imagen: "libroNuevo.jpg",
          id: "9",
        },
      ];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.home-component {
  margin: 120px auto; /* Agrega margen superior e inferior y deja margen izquierdo y derecho automático */
  max-width: 1200px; /* Establece un ancho máximo para el componente */
  padding: 20px;
}

.card {
  width: 18rem;
  margin-bottom: 30px;
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
