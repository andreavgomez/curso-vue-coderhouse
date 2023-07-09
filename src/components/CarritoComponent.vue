<template>
  <div>    
    <!-- <dialog v-if="verModal" @click="closeModal"> -->
    <p>Soy el carrito</p>
    <h1>Carrito de compra</h1>
    <table align="center">
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
              <!-- <span>{{ obtenerCantidad(libro) }}</span> -->
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
    <!-- <button @click="closeModal">Cerrar</button> -->
  <!-- </dialog> -->
  </div>
</template>

<!-- <tr v-for="(item, i) in items" :key="i">   -->

<script>
export default {
  name: "CarritoComponent",
  // data() {
  //     return {
  //      verModal:showModal,
  //      };
  //   },  
  props: {
    carrito: {
      type: Array,
      required: true,
    },
    // showModal: Boolean,
  },
  emits: ['close-modal'],
  methods: {
    incrementar(libro) {
      console.log("incrementar libro")
      const libroEnCarrito = this.carrito.find((l) => l.id === libro.id);
      console.log(libroEnCarrito)
      console.log(libroEnCarrito.cantidad)
      if (libroEnCarrito) {
        this.$set(libroEnCarrito, 'cantidad', libroEnCarrito.cantidad + 1);
      }
      console.log(libroEnCarrito.cantidad)
    },
    decrementar(libro) {
      console.log("decrementar libro")
      const libroEnCarrito = this.carrito.find((l) => l.id === libro.id);
      console.log(libroEnCarrito)     
      console.log(libroEnCarrito.cantidad) 
      if (libroEnCarrito && libroEnCarrito.cantidad > 1) {
        this.$set(libroEnCarrito, 'cantidad', libroEnCarrito.cantidad - 1);
        console.log(libroEnCarrito.cantidad)        
      }
    },
    libroTotal(libro) {
      return libro.precio * libro.cantidad;
    },
    eliminarLibro(libro) {
      console.log("eliminar libro")
      const nuevoCarrito = this.carrito.filter((l) => l.id !== libro.id);
      console.log(nuevoCarrito)      
      this.$emit("update:carrito", nuevoCarrito); // Emitir evento para actualizar la propiedad carrito en el componente padre
    },
    // closeModal() {
    //   this.$emit('close-modal')
    // }   
  },
  computed: {
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
};
</script>

<style>
img {
  width: 100%;
}
.imgsd {
  width: 15%;
}
.car_pro {
  display: flex;
  justify-content: space-between;
  padding: 0.8em;
  background-color: #fff;
  box-shadow: 0 0 10px gray;
  margin-top: 0.4em;
}
.todo h1 {
  text-align: center;
  background-color: #2c23aa;
  padding: 0.5em;
  margin: 0;
  color: white;
}
.total {
  border: 1px solid black;
  padding: 0.5em;
}
</style>
