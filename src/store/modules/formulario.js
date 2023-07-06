export const formularioModule = {
    namespaced: true,
    state: {
      formstate: {},
      sent: false,
      model: {
        apeNom: "",
        edad: 0,
        sexo: "",
        email: "",
      },
    },
    mutations: {
      setSent: (state, sent) => {
        state.sent = sent;
      },
    },
    getters: {
      getSent: (state) => {
          return state.sent
      },
    },
    actions: {
      
      postFormulario: (context, store) => {     
        // console.log(context.state.model);   

        fetch("https://64a6eda4096b3f0fcc80d83e.mockapi.io/Formulario-Component", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            // body: JSON.stringify(context.state.model),
            body: JSON.stringify(store.state.formulario.model),

            })
            .then((res) => res.json())
            .then(() => {           
            context.commit("setSent", true);         
            // this.sent = true   
            });
        },

    },

   /////////
  //  actions: {
  //   postFormulario: (context, store) => {
  //     // Accede al estado utilizando el contexto
  //     console.log(context.state.model);
  
  //     fetch("https://64a6eda4096b3f0fcc80d83e.mockapi.io/Formulario-Component", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(context.state.model),
  //     })
  //       .then((res) => res.json())
  //       .then(() => {
  //         context.commit("setSent", true);
  //       });
  //   },
  // },

    ////////
   
  };