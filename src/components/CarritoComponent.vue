<template>
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
  </div>
</template>

<script>
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
};
</script>

<style scoped>
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
}
</style>
