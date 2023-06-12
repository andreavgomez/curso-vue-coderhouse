<template>
  <div>
    <nav>
      <ul align="left">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
    <h1 class="text-bold">{{ titulo }}</h1>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  props: {
    titulo: String
  },
};
</script>
