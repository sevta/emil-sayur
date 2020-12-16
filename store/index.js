export const state = () => ({
  scrollbarInstance: null,
  navbarActive: false,
  showSettings: false,
  showPopup: true,
  darkMode: false
})

export const mutations = {
  setScrollbarInstance(state, n) {
    state.scrollbarInstance = n
  },
  setShowSettings(state, n) {
    state.showSettings = n
  },
  setNavbarActive(state, n) {
    state.navbarActive = n
  },
  setShowPopup(state, n) {
    state.showPopup = n
  },
  setDarkMode(state, n) {
    state.darkMode = n
  }
}
