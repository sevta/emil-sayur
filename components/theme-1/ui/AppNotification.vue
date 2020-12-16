<template>
  <div
    class="w-full fixed bottom-0 cursor-pointer py-2 px-5 bg-gradient-to-br from-gray-900 to-gray-800 "
    style="z-index: 1000"
    @click="$emit('click')"
  >
    <div
      class="container flex justify-between font-lato tracking-wide text-white"
    >
      <slot></slot>
      <div class="cursor-pointer" @click="$emit('click')">close</div>
    </div>
  </div>
</template>
