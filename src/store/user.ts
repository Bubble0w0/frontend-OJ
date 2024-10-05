import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // todo 改为远程请求获取登陆信息
      commit("updateUser", { userName: "bubble" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
