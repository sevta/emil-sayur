<template>
  <div class="section-product py-6">
    <div class="container w-full">
      <div class="font-bold text-3xl font-lora text-green-800">
        {{ title }}
      </div>
    </div>
    <div class="container flex space-x-4 mt-5">
      <AppProductCard v-for="item in 5" :key="item" :img="img" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'img']
}
</script>
