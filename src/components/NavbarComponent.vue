<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="/" target="_blank">
        <!-- <a class="navbar-brand float-left" href="https://www.google.com" target="_blank"> -->
        <!-- <router-link to="/">Home</router-link> -->
          Libreria El arte de Leer
        </a>
        <ul class="nav navbar-nav flex-row float-right inline-block">
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/login">Ingresar</router-link> -->
            <!-- <router-link class="btn btn-outline-primary" to="/login">Ingresar</router-link> -->
            <a href="/login" target="_blank"><i class="bi bi-person-circle bi-size"></i></a>
            
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-danger" v-if="authenticated" to="/about" -->
            <router-link class="btn btn-outline-danger" to="/about"            
              v-on:click.native="logout()">Salir</router-link>
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/signup">Registrarse</router-link> -->
            <router-link class="btn btn-outline-primary" to="/signup">Registrarse</router-link>
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" to="/carrito">carrito</router-link> -->        
            <a href="/carrito" target="_blank"><i class="bi bi-cart bi-size"></i></a>
          </li>          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

  export default  {
    name: 'NavbarComponent', 
    props: [],
    data () {
      return {
         authenticated: true,
      }
    },
    methods: {
      setAuthenticated(status) {
        console.log("setting de authenticated status > ", status )
        this.authenticated = status;
      },
      logout() {
        console.log("logout")
        this.authenticated = false;
      }
    }    
}
</script>

<style>
    .bi-size {
        font-size: 30px; /* Ajusta el tamaño del icono según tus necesidades */
        width: 2rem;
        
    }
</style>