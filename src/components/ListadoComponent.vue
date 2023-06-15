<template>
  <div>
    <div class="cabecera"></div>
    <b-card-group columns>         
      <b-card  
        v-for="(item, i) in libros"
        :key="i"
        :title="item.name"
        :img-src="item.img"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          {{ item.price | toPrice }}
        </b-card-text>

        <b-button v-b-modal.modal-info v-on:click="showInfo(item)">
          info
        </b-button>
        <b-button v-on:click="addToCart(item)">
          <b-icon icon="cart-plus" class="nav-icon"></b-icon>
        </b-button>
      </b-card>
    </b-card-group>

    <InfoComponent :item="item" />
  </div>
</template>

<script>
import InfoComponent from "./InfoComponent.vue";
import FiltersComponent from "./FiltersComponent.vue";

export default {
  name: "ListadoComponent",
  components: {
    InfoComponent,
  },
  props: {
    libros: Array,
  },
  mixins: [FiltersComponent],
  data() {
    return {
      item: {
        name: "",
        img: "",
        price: 0,
        desc: "",
      },
    };
  },
  methods: {
    addToCart(item) {
      console.log("add to cart: ", item.name);
    },
    showInfo(item) {
      console.log("info de: ", item.name);
      this.item = item;
    },
  },
};
</script>

<style scoped>
.cabecera {
  padding: 1px;
  height: 60px;
}

.card-columns .card {
  width: 80%;
  height: 80%;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.card {
  border-radius: 5%;
  height: 100%;
  /* max-height: 20rem; */
  /* max-width: 100rem; */
}

.card-img-top {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  max-height: 15rem;
  max-width: 100%;
  height: 40%;
  width: 80%;
  margin-top: 1rem;
}

button {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
