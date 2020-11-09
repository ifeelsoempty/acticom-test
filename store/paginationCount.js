export const state = () => ({
  counter: 0
})

export const actions = {
  increaseCounter: ({ commit }) => {
    commit('INCREMENT_VALUE');
  }
}

export const mutations = {
  INCREMENT_VALUE (state) {
    state.counter = state.counter + 1
  },
}

export const getters = {
  counter: s => {
    return s.counter;
  } 
}