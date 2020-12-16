<template>
  <div
    class="layout-wrapper bg-white relative overflow-hidden dark:bg-gray-900 transition duration-500"
    :class="{ dark: darkMode }"
  >
    <AppNavbar :fixed-pos="true" />

    <AppBorderLayout />

    <transition name="fade">
      <AppPopup v-if="showPopup" @overlay-click="setShowPopup(false)">
        <AppPopupCard>
          <div class="text-center">get it now!</div>
        </AppPopupCard>
      </AppPopup>
    </transition>

    <AppWidgetSetting v-if="showSettings" />

    <AppNotification v-if="showNotify" @click="showNotify = false">
      <div>This website is under development 😍😍</div>
    </AppNotification>

    <ScrollbarWrapper>
      <nuxt />
      <AppFooter />
    </ScrollbarWrapper>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    showNotify: true
  }),
  computed: {
    ...mapState(['showSettings', 'scrollbarInstance', 'showPopup', 'darkMode'])
  },
  mounted() {},
  methods: {
    ...mapMutations(['setShowPopup'])
  }
}
</script>
