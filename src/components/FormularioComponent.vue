<template>
  <!-- <form @submit.prevent="submitHandler">
    <div>
      <div>
        <label for="nombreApe">Nombre y Apellido: </label>
        <input type="text" v-model.trim="nombreApe" id="nombreApe" />
      </div>
      <div>
        <label for="edad">Edad: </label>
        <input type="number" v-model.number="edad" id="edad" />
      </div>
      <div>
        <h4>Sexo:</h4>
        <div>
          <label for="documentDNI">Femenino</label>
          <input
            type="radio"
            name="genero"
            id="sexoFem"
            v-model="sexo"
            value="femenino"
          />
        </div>
        <div>
          <label for="sexoMasc">Masculino</label>
          <input
            type="radio"
            name="genero"
            id="sexoMasc"
            v-model="sexo"
            value="masculino"
          />
        </div>
        <div>
          <label for="sexoNeutro">Neutro</label>
          <input
            type="radio"
            name="genero"
            id="sexoNeutro"
            v-model="sexo"
            value="neutro"
          />
        </div>
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </div>
  </form> -->
  <div>
    <vue-form :state="formstate" @submit.prevent="onSubmit">
      <validate tag="label">
        <span>Apellido y Nombre: </span>
        <input type="text" v-model="model.apeNom" required name="apeNom" />
        <field-messages name="apeNom" show="$touched">
          <div slot="required">El Apellido y nombre es obligatorio</div>
        </field-messages>
      </validate>
      <validate tag="label">
         <span>Edad: </span>
         <input type="number" v-model.number="edad" id="edad" />
         <field-messages name="edad" show="$touched">
          <div slot="required">Ingrese su edad</div>
        </field-messages>
      </validate>

      <validate tag="label">      
       <div>
        <h4>Sexo:</h4>
        <div>
          <label for="documentDNI">Femenino</label>
          <input
            type="radio"
            name="genero"
            id="sexoFem"
            v-model.number="sexo"
            value="femenino"
          />
        </div>
        <div>
          <label for="sexoMasc">Masculino</label>
          <input
            type="radio"
            name="genero"
            id="sexoMasc"
            v-model.number="sexo"
            value="masculino"
          />
        </div>
        <div>
          <label for="sexoNeutro">Neutro</label>
          <input
            type="radio"
            name="genero"
            id="sexoNeutro"
            v-model.number="sexo"
            value="neutro"
          />
        </div>
      </div>      
      </validate> 
      <button type="submit">Enviar</button>
    </vue-form>
  </div>
</template>

<script>
export default {
  name: "FormularioComponent",
  data() {
    return {
      // nombreApe: "",
      // edad: 0,
      // sexo: "",
      formstate: {},
      model: {
        apeNom: "",
        edad: 0,
        sexo:"",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.name ===""){
        alert("El apellido y Nombre es obligatorio");
      }
      if (this.edad <= 0){
        alert("La Edad es obligatorio");
      }
      if (this.formstate.$valid) {
        console.log(this.formstate);
        alert("Formulario enviado con exito");
        return;
      }
    },
    checkPassword(value) {
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        value
      );
    },
  },
};
</script>