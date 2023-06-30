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
        <tr>
          <td>Brownies</td>
          <td>$ 250</td>
          <td class="qty-col">
            <div data-v-c22257c1="" class="flex-space">
              <button data-v-c22257c1="" class="button-small mr-05 ml-05" style="cursor: pointer;">➖️</button>
              <span data-v-c22257c1="">1</span>
              <button data-v-c22257c1="" class="button-small ml-05" style="cursor: pointer;">➕️</button>
            </div>
          </td>
          <td class="total-col">$ 250</td>
          <td class="trash-btn">  
            <svg class="icon-pointer" width="1.8em" height="1.8em" viewBox="0 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Trash_Full">
            <path id="Vector" d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20" stroke="crimson" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            </path></g></svg>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td></td>
          <td></td>
          <td>$ 530</td>
          <td></td>
        </tr>
      </tfoot>      
    </table>
    <button class="confirm-btn" style="">PAGAR</button>    
  </div>
</template>

<script>
export default {
  name: "CarritoComponent",
  props: [],
  data() {
    return {
      items: [
        { id: 1, nombre: "nombre1", qty: 2, precio: 100 },
        { id: 2, nombre: "nombre2", qty: 5, precio: 100 },
      ],
    };
  },
  computed: {
    total() {
      return 0;
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
