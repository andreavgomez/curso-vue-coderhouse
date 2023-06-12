<template>
  <div align="center">
    <div>
      <p>
        <strong>{{ contacto }}</strong>
      </p>
      <p class="text-black">{{ telefono }}</p>
      <p class="text-black">{{ email }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardContact",
  props: {
    contacto: String,
    telefono: String,
    email: String,
  },
};
</script>
