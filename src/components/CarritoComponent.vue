<template>
  <div>
    <p>Estoy en el carrito</p>{{showModal}}
    <div class="overlay" v-if="show" @click="closeModal"></div>
    <div class="modal" v-if="show">
      <div class="modal-header">
        <h1>Carrito de compra</h1>
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Soy el carrito</p>
        <h1>Carrito de compra</h1>
        <p v-if="carrito.length === 0">El carrito está vacío.</p>
        <table align="center" v-else>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="libro in carrito" :key="libro.id">
              <td>{{ libro.titulo }}</td>
              <td>$ {{ libro.precio }}</td>
              <td class="qty-col">
                <div class="flex-space">
                  <button
                    class="button-small mr-05 ml-05"
                    style="cursor: pointer"
                    @click="decrementar(libro)"
                  >
                    <i class="bi bi-dash-square"></i>
                  </button>
                  <span>{{ libro.cantidad }}</span>
                  <button
                    class="button-small ml-05"
                    style="cursor: pointer"
                    @click="incrementar(libro)"
                  >
                    <i class="bi bi-plus-square"></i>
                  </button>
                </div>
              </td>
              <td class="total-col">$ {{ libroTotal(libro) }}</td>
              <td class="trash-btn">
                <button
                  class="button-small ml-05"
                  style="cursor: pointer"
                  @click="eliminarLibro(libro)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td></td>
              <td></td>
              <td>$ {{ total }}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <button class="confirm-btn" style="">PAGAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoComponent",
  // data() {
  // return {
  //   showModal: false,
  //  };
  // },
  props: {
    carrito: {
      type: Array,
      required: true,
    },
    showModal: {
      type: Boolean,
      required: true,
    },    
  },
  computed: {
    show() {
      return this.showModal;
    },
    total() {
      if (this.carrito) {
        return this.carrito.reduce(
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
      const libroEnCarrito = this.carrito.find((l) => l.id === libro.id);
      console.log(libroEnCarrito);
      console.log(libroEnCarrito.cantidad);
      if (libroEnCarrito) {
        this.$set(libroEnCarrito, "cantidad", libroEnCarrito.cantidad + 1);
      }
      console.log(libroEnCarrito.cantidad);
    },
    decrementar(libro) {
      console.log("decrementar libro");
      const libroEnCarrito = this.carrito.find((l) => l.id === libro.id);
      console.log(libroEnCarrito);
      console.log(libroEnCarrito.cantidad);
      if (libroEnCarrito && libroEnCarrito.cantidad > 1) {
        this.$set(libroEnCarrito, "cantidad", libroEnCarrito.cantidad - 1);
        console.log(libroEnCarrito.cantidad);
      }
    },
    libroTotal(libro) {
      return libro.precio * libro.cantidad;
    },
    eliminarLibro(libro) {
      console.log("eliminar libro");
      const nuevoCarrito = this.carrito.filter((l) => l.id !== libro.id);
      console.log(nuevoCarrito);
      this.$emit("update:carrito", nuevoCarrito);
    },
    closeModal() {
      this.$emit("close-modal");
    },
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
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}

.modal-header h1 {
  margin: 0;
}

.close-btn {
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  /* Estilos del cuerpo del modal */
}

.modal-body p {
  margin-bottom: 1em;
}

table {
  width: 100%;
  margin-bottom: 1em;
}

th,
td {
  text-align: left;
  padding: 0.5em;
}

th {
  background-color: #f2f2f2;
}

.total-col {
  font-weight: bold;
}

.trash-btn {
  text-align: center;
}

.confirm-btn {
  display: block;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: #2c23aa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-btn:hover {
  background-color: #1d1874;
}
</style>
