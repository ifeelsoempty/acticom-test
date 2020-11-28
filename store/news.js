import { __getNewsList } from '../service/news.js'

export const state = () => ({
  newsList: {},
})

export const mutations = {
  setNewsList(state, val) {
    state.newsList = val
  },
}

export const actions = {
  async getNewsList({ commit }, params) {
    const { status, data, err } = await __getNewsList(params)
    if (status === 200) {
      commit('setNewsList', data.articles)
    }
  },
}

export const getters = {
  newsList: (s) => s.newsList,
}
