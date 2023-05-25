// createApp 
// destructuring
const {createApp} = Vue;

createApp({
    data() {
        return {
            titulo: "Desafio - Contador",            
            numero: 0,
            developer:"Andrea Gomez" 
        } 
    },
    // created() {
    //     this.calculoFucion()
    // },
    methods: {
        incrementar() {
            this.numero += 1 
        },
        decrementar() {
            this.numero -= 1 
        }

    }
    // ,
    // computed: {
    //     sumaComputed() {
    //         return this.numero + 200
    //     }
    // }
}).mount("#app")