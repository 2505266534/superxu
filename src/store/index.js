import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './module/moduleA'

Vue.use(Vuex)

const state = {
  counter: 1000,
  cartList:[],
  students: [
    { id: 1, name: 'lisi', age: 19 },
    { id: 2, name: 'lisan', age: 20 },
    { id: 3, name: 'liyi', age: 21 },
    { id: 4, name: 'lier', age: 22 },
  ]
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a:moduleA
  }
})
