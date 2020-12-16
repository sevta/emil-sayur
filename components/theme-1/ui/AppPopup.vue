<template>
  <div
    @click="$emit('overlay-click')"
    class="fixed w-full h-screen flex items-center justify-center"
    style="z-index: 300"
  >
    <div
      class="overlay w-full h-full absolute top-0 left-0 bg-black opacity-90"
    ></div>
    <div class="z-10">
      <slot></slot>
    </div>
  </div>
</template>
