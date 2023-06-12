<template>
  <div id="app">
        <header :style="cssHeader" align="center">
            <h1>{{tituloHeader}}</h1>
        </header>        
        <header-component :titulo="'Listado de libros'" align="left"></header-component>
        <card-component :titulo="titulo" :portada="portada" :precio="precio" :style="cssCard"></card-component>
        <main-cards v-for="(libros, index) of codermeals" :key="index"
                    :titulo="libros.titulo"
                    :portada="libros.portada"
                    :precio="libros.precio" :style="cssCard">
        </main-cards>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import CardComponent from './components/CardComponent.vue'
// import CardContact from './components/CardContact.vue'
import MainCards from './components/MainCards.vue'

export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    'card-component': CardComponent,
    // 'card-component-contact': CardContact,
    'main-cards': MainCards    
  },
  data() {
    return {
      cssHeader: {
        "background-color": 'rgb(82, 142, 221)',
        "font-family": "Apple Color Emoji"
        // ,"align": "center"
      },
      cssCard :{
        "font-size": '2em'
      },
      tituloHeader: "Desafio - Componentes Vue cdn a Vue cli - Andrea Gomez",
      contacto: "Libreria El arte de leer",
      telefono: "5457-8877",
      email:"ElArteDeLeer@gmail.com",
      titulo: "Nunca te pares",
      portada: "https://http2.mlstatic.com/D_NQ_NP_972244-MLA28113103820_092018-O.webp",
      precio: 675.00,
      codermeals: [
        {
          id: 1,
          titulo: "La tercera",
          precio: 575.00,
          portada: "https://http2.mlstatic.com/D_NQ_NP_883246-MLA53382188534_012023-W.webp"
        },
        {
          id: 2,
          titulo: "La felicidad cabe en una taza de cafe",
          precio: 675.00,
          portada: "https://http2.mlstatic.com/D_NQ_NP_993360-MLA54416348103_032023-W.webp"
        },
        {
          id: 3,
          titulo: "¿Por qué nadie me lo dijo antes?",
          precio: 845.00,
          portada: "https://http2.mlstatic.com/D_NQ_NP_720640-MLA69248602903_052023-W.webp"
        }
      ]

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
