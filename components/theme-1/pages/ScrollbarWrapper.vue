<template>
  <div
    class="scrollbar-wrapper w-full h-screen fixed top-0 left-0 sm:overflow-hidden overflow-auto"
  >
    <slot></slot>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    scrollbar: null
  }),
  mounted() {
    this.initSmoothScrollbar()
    this.$smoothScrollbar()
  },
  methods: {
    ...mapMutations(['setNavbarActive']),

    initSmoothScrollbar() {
      this.scrollbar = Scrollbar.init(
        document.querySelector('.scrollbar-wrapper'),
        {
          damping: 0.08
        }
      )
      this.scrollbar.addListener(({ offset }) => {
        // this.$parallax({
        //   el: document.querySelector('.hero-img-wrapper'),
        //   y: offset.y,
        //   value: 0.5
        // })
        this.$parallax({
          el: document.querySelector('.heading2-img'),
          y: offset.y,
          value: 0.2
        })
        // this.$parallax({
        //   el: document.querySelector('.hero-content'),
        //   y: offset.y,
        //   value: 0.4
        // })
        if (offset.y >= 100) {
          this.setNavbarActive(true)
        } else {
          this.setNavbarActive(false)
        }
      })
    }
  }
}
</script>
