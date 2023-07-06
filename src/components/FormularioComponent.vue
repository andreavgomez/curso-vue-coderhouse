<template>
  <div>
    <p>Form Enviado: {{ getSent }}</p>
    <div v-if="sent">Gracias por ponerte en contacto!</div>
    <vue-form :state="formstate" @submit.prevent="postFormularioClickHandler" v-else>
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
      sent: false,
      model: {
        apeNom: "",
        edad: 0,
        sexo: "",
        email: "",
      },
    };
  },
  computed: {
    getSent() {
      return this.$store.getters["formulario/getSent"];
    }
  },
  methods: {
    postFormularioClickHandler() {
      // this.$store.dispatch("formulario/postFormulario"); 
      this.$store.dispatch("formulario/postFormulario", this.$store);

    },
  },  

    // };

    /////////////////////////
    // export default {
    //   // ...

    //   methods: {
    //     postFormularioClickHandler() {
    //       this.$store.dispatch("formulario/postFormulario")
    //         .then(() => {
    //           this.sent = true;
    //           this.resetForm();
    //         });
    //     },

    //     resetForm() {
    //       this.model.apeNom = "";
    //       this.model.edad = 0;
    //       this.model.sexo = "";
    //       this.model.email = "";
    //       this.sent = false;
    //     },
    //   },
    // };


    ////////////////////////  
    //    methods: {
    //     onSubmit() {
    //     //   console.log(this.model.apeNom, this.model.edad, this.model.sexo,this.model.email)
    //       fetch("https://64a6eda4096b3f0fcc80d83e.mockapi.io/Formulario-Component", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(this.model),
    //       })
    //         .then((res) => res.json())
    //         .then(() => {
    //           this.sent = true
    //         });
    //     },
    //   },

};
</script>
