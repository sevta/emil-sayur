<template>
  <div class="grid relative grid-rows-4 grid-cols-3 h-screen gap-8 p-8 pt-32">
    <div
      class="row-span-4 flex items-center justify-center font-bold font-lato overflow-hidden relative rounded col-span-2 bg-yellow-200"
    >
      <div class="w-full h-full absolute top-0 left-0 transform scale-110">
        <img
          class="heading2-img fill-img"
          src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
    </div>
    <div
      class="col-span-1 bg-white row-span-2 flex relative items-start justify-start rounded p-7 font-bold font-lato"
    >
      <img
        class="fill-img"
        src="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/image1-h2.jpg"
        alt=""
      />
      <div class="flex flex-col h-full justify-between z-10">
        <div class="text-green-800 font-light text-2xl tracking-wide font-lora">
          Discover Real <br />
          Organic
        </div>
        <div
          class="font-semibold text-sm tracking-wide text-gray-800 cursor-pointer"
        >
          Shop Now
        </div>
      </div>
    </div>
    <div
      class="col-span-1 bg-green-700 row-span-2 relative flex items-center rounded overflow-hidden justify-center"
    >
      <img
        class="w-full h-full opacity-25 absolute top-0 left-0 object-cover object-center"
        style="z-index: 1;"
        src="https://thumbs.dreamstime.com/b/vegetables-pattern-vector-seamless-background-35125219.jpg"
        alt=""
      />
      <div class="flex flex-col space-y-3 z-10">
        <div class="italic text-white text-center text-2xl">
          Summer sale
        </div>
        <div class="text-7xl text-yellow-300 font-bold font-body">50% off</div>
      </div>
    </div>
  </div>
</template>
