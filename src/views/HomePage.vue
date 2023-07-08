<template>
  <div>
    <!-- <p>Soy home page</p> -->
    <div class="row">
      <div class="col" v-for="libro in libros" :key="libro.id">
        <div :id="libro.id" class="card" style="width: 18rem">
          <img
            class="card-img-top img-fluid"
            style="height: 200px"
            src="../assets/libroNuevo.jpg"
            :alt="libro.titulo"
          />
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
      //   users: [],
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
      // this.carrito.push(libro);
      console.log(`agregar al carrito`);
      // this.$emit("agregarAlCarrito", libro);

      // Buscar el producto en el carrito:
      const enCarrito = this.findById(libro.id);

      // Si NO está en el carrito, hacer el push
      if (!enCarrito) {
        this.carrito.push(libro);
        this.$emit("agregarAlCarrito", libro);
        // Y si ya está en el carrito modificar cantidad y subtotal
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
