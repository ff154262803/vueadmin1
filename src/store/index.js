import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        iscollapse:false //是否折叠
    },
    mutations: {
        TOGGLE(state) {
            state.iscollapse = !state.iscollapse
        }
    }
})
export default store