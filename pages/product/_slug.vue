<template>
  <div class="min-h-screen pt-10 overflow-hidden">
    <div class="container mb-5">
      <NuxtLink class="text-green-800 font-lato cursor-pointer mb-5" to="/"
        >back</NuxtLink
      >
    </div>
    <div class="container flex space-x-10">
      <div class="h-96 flex-1 relative bg-gray-100">
        <img
          class="fill-img p-10"
          src="@/assets/img/product-example.png"
          alt=""
        />
      </div>
      <div class="font-lato flex-1 flex justify-center flex-col">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
          dolore, veniam modi distinctio delectus similique saepe recusandae
          voluptas fuga cupiditate quae eius explicabo facilis aliquam non vel
          laudantium earum suscipit.
        </div>
        <AppBtn class="mt-10 flex">
          Yuk Beli Sekarang!
        </AppBtn>
      </div>
    </div>
  </div>
</template>
