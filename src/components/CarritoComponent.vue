<template>
  <div>
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
              <button class="button-small mr-05 ml-05" style="cursor: pointer;">➖️</button>
              <span>1</span>
              <button class="button-small ml-05" style="cursor: pointer;">➕️</button>
            </div>
          </td>
          <td class="total-col">$ {{ libro.precio }}</td>
          <td class="trash-btn">
            <svg class="icon-pointer" width="1.8em" height="1.8em" viewBox="0 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Código del icono de eliminación -->
            </svg>
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
</template>

<!-- <tr v-for="(item, i) in items" :key="i">   -->

<script>
export default {
  name: "CarritoComponent",
  props: {
    carrito: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total() {
      if (this.carrito) {
        return this.carrito.reduce((total, libro) => total + libro.precio, 0);
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
