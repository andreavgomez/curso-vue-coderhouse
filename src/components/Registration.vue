<template>
    <div class="vue-tempalte">
        <form>
            <h3>Registro de Usuario</h3>
 
            <div class="form-group">
                <label>Nombre Completo</label>
                <input type="text" v-model="newUsuario.nombre" class="form-control form-control-lg"/>
            </div>
 
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="newUsuario.email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" v-model="newUsuario.password" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Registrarme</button>
 
            <p class="forgot-password text-right">
                Ya estoy registrado
                <router-link :to="{name: 'login'}">Ingresar ?</router-link>
            </p>
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                newUsuario : {
                    nombre:"",
                    email:"",
                    password:""
                }
            }
        }
    }
</script>