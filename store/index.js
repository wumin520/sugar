export const state = () => ({
  counter: 0,
  currentCity: {
    city_name: '全国',
    id: 0
  },
  BACKEND: process.env.BACKEND
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  updateCity (state, payload) {
    state.currentCity = payload
    console.log(state)
  }
}
