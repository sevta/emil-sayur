<template>
  <NuxtLink
    class="logo w-48 cursor-pointer flex items-center pr-3 rounded h-10"
    to="/"
  >
    <img
      class="logo-img object-contain transition duration-300"
      :src="logo"
      alt=""
    />
  </NuxtLink>
</template>

<script>
import { mapState } from 'vuex'
let logoLight = require('@/assets/img/logo1-light.png')
let logoDark = require('@/assets/img/logo1.png')
export default {
  data: () => ({
    logo: logoDark
  }),
  computed: {
    ...mapState(['navbarActive'])
  },
  watch: {
    navbarActive(active) {
      // active ? (this.logo = logoDark) : (this.logo = logoLight)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &.active {
    .logo {
      @apply w-40;
    }
  }
}
</style>
