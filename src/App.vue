<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: true,
    }
  },
  mounted() {
    if (!this.authenticated) {
      // Vamos a pedir login del usuario
      this.$router.replace({ name: "login" });
    }
    console.log("app.vue -> mounted this.authenticated > " + this.authenticated);
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

<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.afip.gob.ar" target="_blank">
          Link to Afip
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/login">Ingresar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-danger" v-if="authenticated" to="/about"
              v-on:click.native="logout()">Salir</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" v-if="!authenticated" to="/signup">Registrarse</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/carrito">carrito</router-link>
          </li>          
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
          <!--<router-view @authenticated="setAuthenticated" />-->
        </div>
      </div>
    </div>
  </div>
</template>