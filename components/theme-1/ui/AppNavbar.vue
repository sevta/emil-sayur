<template>
  <div
    class="navbar py-7 w-full h-auto z-40"
    :class="[{ active: navbarActive }, { 'fixed-pos': fixedPos }]"
  >
    <div class="px-8 grid grid-cols-2">
      <div class="col flex items-center justify-start">
        <AppLogo />
      </div>
      <div class="col flex items-center justify-end">
        <AppNavbarMenu />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['fixed-pos'],
  computed: {
    ...mapState(['navbarActive'])
  },
  watch: {
    navbarActive(active) {
      console.log('active', active)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.2s ease;
  @apply relative;
  &.fixed-pos {
    @apply fixed top-0 left-0;
  }
  &.active {
    @apply py-4 bg-white border-b dark:bg-gray-900 dark:border-transparent;
    &::before {
      content: '';
      z-index: -1;
      @apply w-full h-full absolute top-0 left-0 opacity-50;
    }
  }
}
</style>
