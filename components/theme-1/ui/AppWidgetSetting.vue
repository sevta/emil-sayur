<template>
  <div
    class="widget-setting fixed top-2/4 transform -translate-y-2/4 right-0 p-5 w-64 bg-gray-800 text-white shadow-md z-50"
  >
    <h1 class="mb-7 uppercase font-bold font-lato">settings</h1>
    <div class="flex flex-col">
      <div class="mb-5 flex flex-col" v-for="(item, i) in 5" :key="i">
        <label for="" class="mr-2 text-xs font-lato font-semibold capitalize"
          >navbar</label
        >
        <select
          class="border-b w-full text-xs py-2 bg-transparent"
          name=""
          id=""
        >
          <option class="text-gray-800" value="type-2">type-2</option>
          <option class="text-gray-800" value="type-2">type-2</option>
          <option class="text-gray-800" value="type-2">type-2</option>
          <option class="text-gray-800" value="type-2">type-2</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('settings', ['navbar'])
  },

  mounted() {},

  methods: {
    ...mapMutations('settings', ['changeSettings'])
  }
}
</script>
