const store = {
    state: {
        carrito: []
    },
    incrementQ(libro) {        
        this.state.carrito.forEach((l) => {
            if(l.id === libro.id) {
                l.cantidad = l.cantidad + 1;
                console.log(`lo encontro: ${l.cantidad}`);
            }
          });
        
          console.log("carrito: ", this.state.carrito);
    },
    decrementQ(libro) {
        this.state.carrito.forEach((l) => {
            if(l.id === libro.id) {
                l.cantidad--;
                console.log(`lo encontro: ${l.cantidad}`);
            }
          });
    },
    eliminar(libro) {
        this.state.carrito = this.state.carrito.filter((l) => l.id !== libro.id);
    }
};

export default store;