<template>
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
      <!-- <button type="button" @click="resetForm">Restablecer</button> -->
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
  // methods: {
  //   onSubmit() {
  //     // ...validaciones y acciones del formulario...

  //     if (this.formstate.$valid) {
  //       // Realizar acciones si el formulario es válido
  //       this.$emit("submitForm", this.model);
  //       this.formstate.$reset();
  //     }
  //   },
  //   resetForm() {
  //     this.formstate.$resetFields();
  //   },
  // },
  methods: {
    onSubmit() {
      // ...validaciones y acciones del formulario...

      if (this.formstate.$valid) {
        // Realizar acciones si el formulario es válido
        this.$emit("submitForm", this.model);
        this.resetForm(); // Llamar al método para restablecer el formulario
      }
    },
    resetForm() {
      this.model = {
        apeNom: "",
        edad: 0,
        sexo: "",
        email: "",
      };
      this.formstate.$reset(); // Restablecer el estado del formulario
    },
  },  
};
</script>
