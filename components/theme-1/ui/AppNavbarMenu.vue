<template>
  <div class="navbar-menu flex">
    <a
      v-for="(item, i) in 3"
      :key="i"
      class="font-lato cursor-pointer font-semibold ml-16  text-sm"
    >
      Menu
    </a>
    <div
      class="font-lato cursor-pointer font-semibold ml-16 text-sm"
      @click="toggleDarkMode"
    >
      Dark
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['darkMode'])
  },
  watch: {
    darkMode(darkMode) {
      if (darkMode) {
        document.querySelector('html').classList.add('dark')
      } else {
        document.querySelector('html').classList.remove('dark')
      }
    }
  },
  methods: {
    ...mapMutations(['setDarkMode']),
    toggleDarkMode(dark) {
      this.setDarkMode(!this.darkMode)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  &.active {
    .container {
      .col {
        .navbar-menu {
          a {
            @apply text-gray-500 dark:text-white;
          }
        }
      }
    }
  }
}
</style>
