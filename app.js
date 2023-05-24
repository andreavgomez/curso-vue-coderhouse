// createApp 
// destructuring
const { createApp } = Vue;

createApp({
    data() {
        return {
            titulo: "Hola VUE",
            mostrarMensaje: true,
            info: [],
            cssHeader: {
                "background-color": 'rgb(82, 142, 221)',
                "font-family": "Apple Color Emoji"
                // ,"align": "center"
            },
        }
    },
    created() {
        this.getElemento();
    },
    methods: {
        showMensaje() {
            (this.mostrarMensaje) ? this.mostrarMensaje = false : this.mostrarMensaje = true

        },
        getElemento() {
            this.info = data;
        },
        esPar(numero){
            return(numero % 2) == 0; 
        } 
    }
}).mount("#app")