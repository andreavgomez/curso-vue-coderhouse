export const usuarioModule = {
  namespaced: true,
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    setCurrentUserAction(context, user) {
      context.commit('setCurrentUser', user);
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
};
