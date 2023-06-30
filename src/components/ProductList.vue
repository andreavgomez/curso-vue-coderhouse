<template>
  <div>
    <h2>Product List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Libro</th>
          <th>Descripcion</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.name }}</td>
          <td>{{ book.desc }}</td>
          <td>{{ book.price }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import libros from '../assets/libros.json';

export default {
  name: "ProductList",
  data() {
    return {
      books: libros,
    };
  },
};
</script>
