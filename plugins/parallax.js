function _parallax(el, y, value) {
  el.style.transform = `translate3d(0, ${y * value}px, 0)`
}

export default ({ app }, inject) => {
  inject('parallax', opts => {
    if (opts) _parallax(opts.el, opts.y, opts.value)
  })
}
