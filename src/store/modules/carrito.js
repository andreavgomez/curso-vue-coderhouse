export const carritoModule = {
  namespaced: true,
  state: {
    carrito: [],
  },
  mutations: {
    incrementQ(state, libro) {
      state.carrito.forEach((l) => {
        if (l.id === libro.id) {
          l.cantidad = l.cantidad + 1;
        }
      });
    },
    decrementQ(state, libro) {
      state.carrito.forEach((l) => {
        if (l.id === libro.id) {
          l.cantidad--;
        }
      });
    },
    eliminar(state, libro) {
      state.carrito = state.carrito.filter((l) => l.id !== libro.id);
    },
  },
  actions: {
    incrementAction(context, libro) {
      context.commit('incrementQ', libro);
    },
    decrementAction(context, libro) {
      context.commit('decrementQ', libro);
    },
    eliminarAction(context, libro) {
      context.commit('eliminar', libro);
    },
  },
  getters: {
    getIncrementQ(state) {
      return state.cantidad;
    },
    getDecrementQ(state) {
      return state.cantidad;
    },
    getEliminar(state) {
      return state.cantidad;
    },
    getLibroTotal(state) {
      return state.precio * state.cantidad;
    },
  }
};
