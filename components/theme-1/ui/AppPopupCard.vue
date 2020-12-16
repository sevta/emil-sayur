<template>
  <div
    class="p-14 relative bg-green-800 text-white z-30 rounded-lg overflow-hidden"
    @click.stop=""
  >
    <img
      class="w-full h-full opacity-25 absolute top-0 left-0 object-cover object-center"
      style="z-index: 1;"
      src="https://thumbs.dreamstime.com/b/vegetables-pattern-vector-seamless-background-35125219.jpg"
      alt=""
    />
    <div class="flex flex-col space-y-3 z-30">
      <div class="italic text-white text-center text-2xl">
        Summer sale
      </div>
      <div class="text-7xl text-yellow-300 font-bold font-body">50% off</div>
      <slot></slot>
    </div>
  </div>
</template>
