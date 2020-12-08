//获取管理员列表
import { getUser, getTotal, Login } from '@/request/user';
import { Message } from "element-ui"
import router from '@/router';
let userinfo = localStorage.getItem('userinfo')?JSON.parse( localStorage.getItem('userinfo')):{}
export default {
  namespaced: true,
  state: {
    userlist: [],
    page: 1,
    size: 1,
    total: 0,
    userinfo:userinfo
  },
  getters: {
    userlist: state => state.userlist,
    page: state => state.page,
    size: state => state.size,
    total: state => state.total,
    menus: state => state.userinfo.menus,
    menus_url: state => state.userinfo.menus_url,
    username: state => state.userinfo.username,
  },
  mutations: {
    SET_LIST(state, data) {
      state.userlist = data
    },
    SET_PAGE(state, data) {
      state.page = data
    },
    SET_SIZE(state, data) {
      state.size = data
    },
    SET_TOTAL(state, data) {
      state.total = data
    },
    SET_USERINFO(state, data) {
      localStorage.setItem("userinfo",JSON.stringify(data))
      state.userinfo = data
    },
    QUIT(state) {
      localStorage.removeItem('userinfo')
      state.userinfo = {}
      router.push('/login')
    }
  },
  actions: {
    async get_user_list({ commit, state,dispatch }) {
      let res = await getUser(state.page, state.size)
      commit('SET_LIST', res)
      dispatch("get_user_total")
    },
    async get_user_total({ commit }) {
      let res = await getTotal()
      commit("SET_TOTAL",res)
    },
    get_page({ commit,dispatch },data) {
      commit('SET_PAGE', data)
      dispatch("get_user_list")
     },
     get_size({ commit,dispatch },data) {
      commit('SET_SIZE', data)
      dispatch("get_user_list")
    },
    async login({ commit }, data) {
      let res = await Login(data)
      if (res.code == 200) {
        commit('SET_USERINFO' ,res.list)
        Message.success("登录成功")
        router.push("/")
      } else {
        Message.error(res.msg)
      }
     }
  }
};
