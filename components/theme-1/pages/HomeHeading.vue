<template>
  <div class="w-full min-h-screen relative overflow-hidden">
    <transition name="fade" mode="out-in">
      <div class="hero-img-wrapper w-full h-full absolute top-0 left-0">
        <img
          v-if="animate"
          class="hero-img w-full h-full absolute top-0 left-0 object-cover object-center"
          :src="images[index]"
          alt=""
        />
      </div>
    </transition>
    <div
      class="layer-1 w-full h-full absolute top-0 left-0 bg-black opacity-30"
    ></div>
    <HomeHeadingCenter />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1020&q=80'
    },
    images: {
      type: Array,
      default: function() {
        return [
          'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
          'https://images.unsplash.com/photo-1536010447069-d2c8af80c584?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1020&q=80',
          'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
        ]
      }
    }
  },
  data: () => ({
    index: 0,
    timeout: 30000,
    animate: true,
    isSlide: true
  }),
  mounted() {
    if (this.isSlide) this.slideImg()
  },
  watch: {
    animate(animate) {
      console.log(animate)
    }
  },
  methods: {
    slideImg() {
      setInterval(() => {
        this.animate = false
        if (this.index >= this.images.length - 1) {
          this.index = 0
        } else {
          this.index++
        }
        this.$nextTick(() => (this.animate = true))
      }, this.timeout)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-img {
  animation: zoominoutsinglefeatured 30s infinite;
}
@keyframes zoominoutsinglefeatured {
  0% {
    transform: scale(1, 1) rotate(0);
  }
  100% {
    transform: scale(1.5, 1.5) rotate(5deg);
  }
}
</style>
