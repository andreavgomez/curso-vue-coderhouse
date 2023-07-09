<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="/">
        <!-- <a class="navbar-brand float-left" href="https://www.google.com" target="_blank"> -->
        <!-- <router-link to="/">Home</router-link> -->
          Libreria El arte de Leer
        </a>
        <ul class="nav navbar-nav flex-row float-right inline-block">
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/login">Ingresar</router-link> -->
            <router-link class="btn btn-outline-primary" to="/login"><i class="bi bi-person-circle bi-size"></i></router-link>
            <!-- <a href="/login"><i class="bi bi-person-circle bi-size"></i></a> -->
            
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-danger" v-if="authenticated" to="/about" -->
            <router-link class="btn btn-outline-danger" to="/about"            
              v-on:click.native="logout()">Salir</router-link>
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/signup">Registrarse</router-link> -->
            <router-link class="btn btn-outline-primary" to="/registration">Registrarse</router-link>           
            <!-- <router-link class="btn btn-outline-primary" to="/registration">Registrarse</router-link> -->
          </li>
          <li class="nav-item">
            <!-- <router-link class="btn btn-outline-primary" to="/carrito">carrito</router-link> -->                    
            <!-- <a href="/carrito" ><i class="bi bi-cart bi-size"></i></a> -->
            <!--  -->
            <router-link class="btn btn-outline-primary" to="/carrito"><i class="bi bi-cart bi-size"></i></router-link>                    
            <!-- <router-link class="btn btn-outline-primary" to="/carrito">
              <b-button v-b-toggle.sidebar-cart class="nav-btn">
                 <b-icon icon="cart" class="bi bi-cart bi-size"></b-icon> 
                 <i class="bi bi-cart bi-size"></i>
            </b-button>
           </router-link> -->
          </li>          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

  export default  {
    name: 'NavbarComponent', 
    props:['carrito'],
    // props: {
    // carrito: {
    //   type: Array,
    //   required: true,
    // },
    // },
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
        font-size: 30px; 
        width: 2rem;
        
    }
  .nav-item {
        padding: 4px;
    }
</style>