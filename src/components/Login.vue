<template>
    <div class="vue-tempalte">
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
    name: "LoginComponent",
    data() {
        return {
            input: {
                usr: "",
                pass: ""
            }, mockUsuario: {
                usr: "usuario1",
                pass: "123"
            },
            variable:"valor"
        }
    },
    methods: {
        login() {
            if (this.input.usr != "" && this.input.pass != "") {
                if (this.input.usr == this.mockUsuario.usr && this.input.pass == this.mockUsuario.pass) {
                    this.$emit("authenticated", true);
                    // Indicando el primer componente al cual accede una vez autorizado
                     console.log("Tu usuario y pass es correcto");
                     <p><h3>"Tu usuario y pass es correcto"</h3></p>                     
                    this.$router.replace({ name: "home" });                
                } else {
                    console.log("Tu usuario y pass es incorrecto");
                    console.log(`this.input.usr: ${this.input.usr} this.mockUsuario.usr: ${this.mockUsuario.usr}`);                    
                    console.log(`this.input.pass: ${this.input.pass} this.mockUsuario.pass: ${this.mockUsuario.pass}`);                                        
                    <p><h3>"Tu usuario y pass es incorrecto"</h3></p>
                }
            } else {
                console.log("A username and password must be present");
            }

        }
      
    }
}
</script>