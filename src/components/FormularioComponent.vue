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
        <input type="number" v-model.number="model.edad" id="edad" />
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
              v-model.number="model.sexo"
              value="femenino"
            />
          </div>
          <div>
            <label for="sexoMasc">Masculino</label>
            <input
              type="radio"
              name="genero"
              id="sexoMasc"
              v-model.number="model.sexo"
              value="masculino"
            />
          </div>
          <div>
            <label for="sexoNeutro">Neutro</label>
            <input
              type="radio"
              name="genero"
              id="sexoNeutro"
              v-model.number="model.sexo"
              value="neutro"
            />
          </div>
        </div>
      </validate>

      <validate tag="label">
        <span>Email: </span>
        <input type="email" v-model="model.email" name="email" required />
        <field-messages name="email" show="$touched">
          <div slot="required">El email es requerido</div>
          <div slot="email">El email no es válido</div>
        </field-messages>
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
      formstate: {},
      model: {
        apeNom: "",
        edad: 0,
        sexo: "",
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.model.apeNom === "") {
        alert("El apellido y Nombre es obligatorio");
      }
      if (this.model.edad <= 0) {
        alert("La Edad es obligatorio");
      }
      if (this.model.sexo === "") {
        alert("La sexo es obligatorio");
      }
      if (this.formstate.$valid) {
        console.log(this.formstate);
        alert("Formulario enviado con exito");
        return;
      }

     this.$emit("submitForm", this.formstate);      
     this.formstate = {
        apeNom: "",
        edad: 0,
        sexo: "",
        email: "",
      };     
    },
  },
};
</script>