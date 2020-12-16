function _init() {}

export default ({ app }, inject) => {
  inject('smoothScrollbar', el => {
    console.log(app)
  })
}
