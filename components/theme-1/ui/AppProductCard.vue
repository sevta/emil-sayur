<template>
  <NuxtLink
    to="/product/kangkung"
    class="product-card cursor-pointer flex flex-col flex-1 pb-2 overflow-hidden shadow-md border rounded transform hover:scale-105 duration-200 dark:bg-black dark:border-transparent"
  >
    <div
      class="h-44 bg-white dark:bg-gray-800 overflow-hidden flex items-center justify-center"
    >
      <img
        class="h-auto w-full object-center object-cover"
        :src="img"
        alt="product"
      />
    </div>
    <div class="text-center py-4">
      <div class="font-lato mb-2 text-gray-500 text-sm">kangkung rebus</div>
      <div class="font-bold text-lg text-green-800">Rp 20.000</div>
      <div class="w-10 h-px my-3 bg-gray-500 mx-auto"></div>
      <NuxtLink
        class="font-black dark:text-gray-300 cursor-pointer text-xs font-lato uppercase"
        to="/product/kangkung"
      >
        shop now
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['img']
}
</script>
