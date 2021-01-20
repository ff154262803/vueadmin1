// 获取规格列表！
import { getGoods, getTotal, } from "@/request/goods"

export default {
  namespaced: true,
  state: {
    goodslist: [],// 规格列表,
    page: 1,
    size: 10,
    total: 0,
  },
  getters: {
    goodslist: state => state.goodslist,
    page: state => state.page,
    size: state => state.size,
    total: state => state.total,
  },
  mutations: {
    SET_LIST(state, data) {
      state.goodslist = data;
    },
    SET_PAGE(state, data) {
      state.page = data;
    },
    SET_SIZE(state, data) {
      state.size = data;
    },
    SET_TOTAL(state, data) {
      state.total = data;
    },

  },
  actions: {
    // 请求规格列表的数据！
    async get_goods_list({ commit, state, dispatch }) {
      let res = await getGoods(state.page, state.size);
      res.forEach(val => {
        val.specsattr = val.specsattr ? val.specsattr.split(',') : []
      })
      commit('SET_LIST', res)
      dispatch('get_goods_total')
    },
    async get_goods_total({ commit }) {
      let res = await getTotal();
      commit('SET_TOTAL', res)
    },
    set_page({ commit, dispatch }, data) {
      commit('SET_PAGE', data)
      dispatch('get_goods_list')
    },
    set_size({ commit, dispatch }, data) {
      commit('SET_SIZE', data)
      dispatch('get_goods_list')
    },
  }
};
