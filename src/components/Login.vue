<template>
  <div class="login-component">
    <form>
      <h3>Ingresar</h3>

      <div class="form-group">
        <label>Usuario {{ variable }}</label>
        <input type="text" v-model="input.usr" class="form-control form-control-lg" />
      </div>

      <div class="form-group">
        <label>Contraseña</label>
        <input type="password" v-model="input.pass" class="form-control form-control-lg" />
      </div>

      <button type="button" @click="login" class="btn btn-dark btn-lg btn-block">Ingresar</button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">¿Olvidó su contraseña?</router-link>
      </p>

      <div class="social-icons">
        <ul>
          <li><a href="#"><i class="bi bi-facebook"></i></a></li>
          <li><a href="#"><i class="bi bi-clipboard"></i></a></li>
          <li><a href="#"><i class="bi bi-watch"></i></a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      input: {
        usr: "",
        pass: ""
      },
      mockUsuario: {
        usr: "usuario1",
        pass: "123"
      },
      variable: "valor"
    }
  },
  methods: {
    login() {
      if (this.input.usr != "" && this.input.pass != "") {
        if (this.input.usr == this.mockUsuario.usr && this.input.pass == this.mockUsuario.pass) {
          this.$emit("authenticated", true);
          console.log("Tu usuario y contraseña son correctos");
          this.$router.replace({ name: "home" });
        } else {
          console.log("Tu usuario o contraseña son incorrectos");
          console.log(`this.input.usr: ${this.input.usr}, this.mockUsuario.usr: ${this.mockUsuario.usr}`);
          console.log(`this.input.pass: ${this.input.pass}, this.mockUsuario.pass: ${this.mockUsuario.pass}`);
        }
      } else {
        console.log("Se deben proporcionar un nombre de usuario y contraseña");
      }
    }
  }
}
</script>

<style>
.login-component {
  max-width: 400px;
  margin: 100px auto 0; /* Agrega un margen superior de 100px */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
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

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-icons ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.social-icons li {
  margin-right: 10px;
}

.social-icons a {
  color: #000;
  font-size: 24px;
}
</style>
