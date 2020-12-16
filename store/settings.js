export const state = () => ({
  navbar: 'type-1'
})

export const mutations = {
  changeSettings(state, { type, value }) {
    if (type) state[type] = value
  }
}
