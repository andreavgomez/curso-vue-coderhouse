<template>
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
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.card-title {
  font-size: 1rem;
}

button {
  font-size: x-small;
}

#buy-btn {
  margin-left: 2rem;
  font-size: small;
}
</style>
