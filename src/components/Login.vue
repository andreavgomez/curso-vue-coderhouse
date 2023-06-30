<template>
    <div class="vue-tempalte">
        <form>
            <h3>Ingresar</h3>

            <div class="form-group">
                <label>Email {{ variable }}</label>
                <input type="email" v-model="input.username" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" v-model="input.password" class="form-control form-control-lg" />
            </div>

            <button type="button" @click="login" class="btn btn-dark btn-lg btn-block">Ingresar</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Olvidó su constraseña ?</router-link>
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
    data() {
        return {
            input: {
                username: "",
                password: ""
            }, mockUsuario: {
                username: "usuario@com.ar",
                password: "password"
            },
            variable:"valor"
        }
    },
    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                if (this.input.username == this.mockUsuario.username && this.input.password == this.mockUsuario.password) {
                    this.$emit("authenticated", true);
                    // Indicando el primer componente al cual accede una vez autorizado
      name: 'lista',
                    this.$router.replace({ name: "lista" });
                    console.log("The username and password are Correct");
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }

        }
    }
}
</script>