import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import menu from './modules/menu';
import role from './modules/role';
import user from './modules/user';
let store = new Vuex.Store({
  state: {
    iscollapse: false //是否折叠
  },
  mutations: {
    TOGGLE(state) {
      state.iscollapse = !state.iscollapse
    }
  },
  modules: {
    menu,
    role,
    user
  }
})
export default store
