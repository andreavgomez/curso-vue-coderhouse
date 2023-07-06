import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import { photosModule } from './modules/photos'
import { formularioModule } from './modules/formulario'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // photos: photosModule,
    formulario: formularioModule ,
  }
})

