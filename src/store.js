const store = {
    state: {
      carrito: [],
      currentUser: null
    },
    incrementQ(libro) {
      this.state.carrito.forEach((l) => {
        if (l.id === libro.id) {
          l.cantidad = l.cantidad + 1;
        }
      });
    },
    decrementQ(libro) {
      this.state.carrito.forEach((l) => {
        if (l.id === libro.id) {
          l.cantidad--;
        }
      });
    },
    eliminar(libro) {
      this.state.carrito = this.state.carrito.filter((l) => l.id !== libro.id);
    },
  };
  
  export default store;
  