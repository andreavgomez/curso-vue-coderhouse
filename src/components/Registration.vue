<template>
  <div class="registration-component">
    <div v-if="sent">
      <h3>¡Te has registrado exitosamente!</h3>
    </div>
    <form @submit.prevent="formSubmitHandler" v-else>
      <h3>Registro de Usuario</h3>

      <div class="form-group">
        <label>Nombre Completo</label>
        <input type="text" v-model="newUsuario.nombre" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="newUsuario.email" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Usuario</label>
        <input type="text" v-model="newUsuario.usr" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" v-model="newUsuario.pass" class="form-control form-control-lg" />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">Registrarme</button>

      <p class="forgot-password text-right">
        Ya estoy registrado
        <router-link :to="{name: 'login'}">¿Ingresar?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationComponent",
  data() {
    return {
      sent: false,
      newUsuario: {
        nombre: "",
        email: "",
        usr: "",
        pass: "",
        isAdmin: false
      }
    };
  },
  methods: {
    formSubmitHandler() {
      fetch("https://649e5806245f077f3e9c4bc1.mockapi.io/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.newUsuario)
      })
        .then((res) => res.json())
        .then(() => {
          this.sent = true;
          this.$router.replace({ name: "home" }); // Redirección al home
        });
    }
  }
};
</script>

<style scoped>
.registration-component {
  max-width: 400px;
  margin: 100px auto 0; /* Agrega un margen superior de 100px */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.registration-component h3 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.forgot-password {
  text-align: right;
  margin-top: 10px;
}
</style>
