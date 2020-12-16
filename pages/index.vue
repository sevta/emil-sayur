<template>
  <div class="home-wrapper">
    <HomeHeading2 />
    <HomeSectionWhy />
    <HomeSectionProduct title="Featured Products" :img="exampleImg" />
    <HomeSectionProduct
      title="Best Seller"
      img="https://demo2wpopal.b-cdn.net/freshio/wp-content/uploads/2020/08/35-450x420.jpg"
    />
    <HomeSectionUserRating />
  </div>
</template>

<script>
var exampleImg = require('@/assets/img/product-example.png')
export default {
  layout: 'theme-1',
  scrollToTop: false,
  data: () => ({
    exampleImg: exampleImg
  })
}
</script>
