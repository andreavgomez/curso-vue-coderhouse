const { createApp } = Vue;

const Header = {
  props: {
    titulo: String
  },
  template: `
  <nav><ul>
  <li><a href="./index.html">Home</a></li>
  <li><a href="./contact.html">Contact</a></li>
  </ul>
  </nav>
  <h1 class="text-bold">{{titulo}}</h1>
  `
}

const Card = {
  props: {
    titulo: String,
    portada: String,
    precio: Number
  },
  template: `
  <div align="center">
  <div>
      <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
      <p>{{ titulo }}</p>
      <p class="text-black">$<strong> {{ precio }}</strong></p>
      <button class="btn btn-success btn-rounded">Agregar</button>
      <br><br>
  </div>
  </div>
  `
}

const CardContact = {
  props: {
    contacto: String,
    telefono: String,
    email: String
  },
  template: `
  <div align="center">
  <div>
      <p><strong>{{ contacto }}</strong></p>
      <p class="text-black">{{ telefono }}</p>
      <p class="text-black">{{ email }}</p>
  </div>
  </div>
  `
}

const MainCards = {
  props: {
    titulo: String,
    precio: Number,
    portada: String
  },
  template: `
  <div align="center">
  <div>
      <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
      <p>{{ titulo }}</p>
      <p class="text-black">$<strong> {{ precio }}</strong></p>
      <button class="btn btn-success btn-rounded">Agregar</button>
      <br><br>
  </div>
  </div>
  `
}

createApp({
  components: {
    'header-component': Header,
    'card-component': Card,
    'card-component-contact': CardContact,
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
      tituloHeader: "Desafio - Componentes - Andrea Gomez",
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
}).mount("#app")