<template>
  <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Apellido y Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Sexo</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, i) in datos" :key="i">
            <td>{{ data.apeNom }}</td>
            <td>{{ data.edad }}</td>
            <td>{{ data.sexo }}</td>
            <td>{{ data.email }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'TablaComponent',
  props: {
    datos: {
      type: Array,
      required: true,
    },
  },				   
};
</script>
// <script>
// export default {
//   name: "TableComponent",
//   props: {
//       info: {
//       type: Array,
//       required: true,
//     },
//   },
//           data() {
//             return {
//               formstate: {},
//               model: {
//                 apeNom: "",
//                 edad: 0,
//                 sexo: "",
//                 email: "",
//               },
//             };
//           },
// };
// </script>


