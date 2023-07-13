<template>
<<<<<<< HEAD
  <div>
    <!-- <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Imagen</th>          
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in libros"
          :key="i"
          :class="i % 2 == 0 ? 'odd' : null"
        >
          <th>{{ i }}</th>
          <td>{{ libros.name }}</td>
          <td>{{ libros.price }}</td>
          <td>{{ libros.cantidad }}</td>
          <td><img :src="libros.img" alt="libro" /></td>
        </tr>
      </tbody>
    </table> -->
    <!-- </div> -->

    <!-- <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Total: </strong>
          {{ totalPrice | toPrice }}

          <b-button @click="buy" id="buy-btn">Pagar</b-button>
        </div> -->
    <!-- </template> -->

    <b-sidebar id="sidebar-cart" title="Carrito" right shadow>
      <div v-if="quantity == 0" class="px-3 py-2">
        <p>No hay libros en su carrito</p>
      </div>
      <div v-else>
        <b-card
          v-for="(item, i) in libros"
          :key="i"
          no-body
          class="overflow-hidden"
          style="max-width: 540px"
        >
          <b-row no-gutters>   
            <b-col md="6">
              <b-card-title>Titulo</b-card-title>
            </b-col>  
            <!-- <b-col md="6">
              <b-card-text >Precio</b-card-text>
            </b-col>        -->
            <b-col md="6">
              <b-card-title >Cantidad</b-card-title>
            </b-col>                            
          </b-row>     
          <b-row no-gutters>
            <b-col md="6">
              <b-card-text>{{item.name}}</b-card-text>
            </b-col>  
            <b-col md="6">
                <b-card-text>                  
                  <b-button-group class="float-center">
                    <b-button v-on:click="subtract(item)">-</b-button>
                    <b-button disabled>{{ item.cantidad }}</b-button>
                    <b-button v-on:click="add(item)">+</b-button>
                  </b-button-group>
                </b-card-text>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Total: </strong>
          {{ totalPrice | toPrice }}

          <b-button @click="buy" id="buy-btn">Pagar</b-button>
        </div>
      </template>
    </b-sidebar>

    <b-table hover :libros:="libros"></b-table>
    

    <!-- <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Imagen</th>          
        </tr>
      </thead>    
    </table>   -->
=======
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title text-primary">Carrito de compra</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p v-if="storeState.carrito.length === 0">El carrito está vacío.</p>
          <div v-else>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th class="title-col">Producto</th>
                  <th class="title-col">Precio</th>
                  <th class="title-col">Cantidad</th>
                  <th class="title-col">Total</th>
                  <th class="title-col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(libro, index) in storeState.carrito" :key="libro.id" :class="index % 2 === 0 ? 'even-row' : 'odd-row'">
                  <td>{{ libro.titulo }}</td>
                  <td>$ {{ libro.precio }}</td>
                  <td>
                    <div class="input-group">
                      <button class="btn btn-outline-primary" @click="decrementar(libro)">
                        <i class="bi bi-dash"></i>
                      </button>
                      <input type="number" class="form-control" v-model.number="libro.cantidad" min="1" max="99" />
                      <button class="btn btn-outline-primary" @click="incrementar(libro)">
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>$ {{ libroTotal(libro) }}</td>
                  <td>
                    <button class="btn btn-danger" @click="eliminarLibro(libro)">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-end">Total:</td>
                  <td colspan="2">$ {{ total }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="text-center">
              <button class="btn btn-primary confirm-btn">PAGAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 9971a3b24163a9c43e446ff2566f0f7bbdef207b
  </div>
</template>

<script>
<<<<<<< HEAD
import FiltersComponent from "./FiltersComponent.vue";

export default {
  name: "CarritoComponent",
  components: {},
  mixins: [FiltersComponent],
  data() {
    return {
      // columns: ["Nombre", "Precio", "Cantidad", "Imagen"],
      libros: [
        {
          name: "La tercera",
          img: "https://http2.mlstatic.com/D_NQ_NP_883246-MLA53382188534_012023-W.webp",
          price: 575.0,
          cantidad: 1,
        },
      ],
      quantity: 1,
      totalPrice: 575.0,
      // items: [
      //     {name: 'La tercer', img: "https://http2.mlstatic.com/D_NQ_NP_883246-MLA53382188534_012023-W.webp", price: 575.0,cantidad: 1 }    
      //   ]
    };
  },
  methods: {
    add(item) {
      item.cantidad++;
    },
    subtract(item) {
      item.cantidad == 0 ? (item.cantidad = 0) : item.cantidad--;
    },
    buy() {
      console.log("iniciar compra...");
    },
  },
=======
import store from "../store";

export default {
  name: "CarritoComponent",
  data() {
    return {
      // showModal: false,
      storeState: store.state,
    };
  },
  props: {
    // carrito: {
    //   type: Array,
    //   required: true,
    // },
    // showModal: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  computed: {
    // show() {
    //   return this.showModal;
    // },
    total() {
      if (this.storeState.carrito) {
        return this.storeState.carrito.reduce(
          (total, libro) => total + libro.precio * libro.cantidad,
          0
        );
      } else {
        return 0;
      }
    },
  },
  methods: {
    incrementar(libro) {
      console.log("incrementar libro");
      store.incrementQ(libro);
      
      // const libroEnCarrito = this.storeState.carrito.find((l) => l.id === libro.id);
      
      // console.log(libroEnCarrito);
      // console.log(libroEnCarrito.cantidad);

      // if (libroEnCarrito) {
      //   // this.$set(libroEnCarrito, "cantidad", libroEnCarrito.cantidad + 1);

      // }
      // console.log(libroEnCarrito.cantidad);
    },
    decrementar(libro) {
      console.log("decrementar libro");
      store.decrementQ(libro);

      // const libroEnCarrito = this.storeState.carrito.find((l) => l.id === libro.id);
      // console.log(libroEnCarrito);
      // console.log(libroEnCarrito.cantidad);
      
      // if (libroEnCarrito && libroEnCarrito.cantidad > 1) {
      //   this.$set(libroEnCarrito, "cantidad", libroEnCarrito.cantidad - 1);
      //   console.log(libroEnCarrito.cantidad);
      // }
    },
    libroTotal(libro) {
      return libro.precio * libro.cantidad;
    },
    eliminarLibro(libro) {
      console.log("eliminar libro");
      store.eliminar(libro);

      // const nuevoCarrito = this.storeState.carrito.filter((l) => l.id !== libro.id);
      // console.log(nuevoCarrito);
      // this.$emit("update:carrito", nuevoCarrito);
    },
    // closeModal() {
    //   this.$emit("close-modal");
    // },
  },
  // computed: {
  //   total() {
  //     if (this.carrito) {
  //       return this.carrito.reduce(
  //         (total, libro) => total + libro.precio * libro.cantidad,
  //         0
  //       );
  //     } else {
  //       return 0;
  //     }
  //   },
  // },
>>>>>>> 9971a3b24163a9c43e446ff2566f0f7bbdef207b
};
</script>

<style scoped>
<<<<<<< HEAD
.card-title {
  font-size: 1rem;
}

button {
  font-size: x-small;
}

#buy-btn {
  margin-left: 2rem;
  font-size: small;
=======
.modal-content {
  border: none;
  border-radius: 0;
}

.modal-header {
  justify-content: center;
}

.modal-body {
  padding: 0;
}

.table {
  margin-bottom: 0;
}

.table th,
.table td {
  vertical-align: middle;
}

.table-striped tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: #fff;
}

.title-col {
  background-color: var(--bs-primary);
  color: #fff;
}

.input-group {
  width: 100%;
}

.input-group .btn {
  width: 3rem;
  margin: 0 0.5rem;
}

.confirm-btn {
  margin-top: 1rem;
  background-color: var(--bs-primary);
  color: #fff;
>>>>>>> 9971a3b24163a9c43e446ff2566f0f7bbdef207b
}
</style>
