<template>
  <div class="layout-wrapper bg-white relative">
    <AppWidgetSetting v-if="showSettings" />
    <AppNotification v-if="showNotify" @click="showNotify = false">
      <div>This website is under development 😍😍</div>
    </AppNotification>
    <AppNavbar />

    <ScrollbarWrapper>
      <nuxt />
      <AppFooter />
    </ScrollbarWrapper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    showNotify: true
  }),
  computed: {
    ...mapState(['showSettings', 'scrollbarInstance'])
  },
  mounted() {}
}
</script>
