<template>
  <div align="center">
    <div>
      <img class="img-thumbnail img-cropped" :src="portada" :title="titulo" />
      <p>{{ titulo }}</p>
      <p class="text-black">
        $<strong> {{ precio }}</strong>
      </p>
      <button class="btn btn-success btn-rounded">Agregar</button>
      <br /><br />
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    titulo: String,
    portada: String,
    precio: Number
  },
};
</script>
