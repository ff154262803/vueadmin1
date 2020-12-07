//获取管理员列表
import { getUser } from '@/request/user';
export default {
  namespaced: true,
  state: {
    userlist: [],
    page: 1,
    size: 10
  },
  getters: {
    userlist: state => state.userlist
  },
  mutations: {
    SET_LIST(state, data) {
      state.userlist = data
    }
  },
  actions: {
    async get_user_list({ commit, state }) {
      let res = await getUser(state.page, state.size)
      commit('SET_LIST', res)
    }
  }
};
