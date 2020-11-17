<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">

          <!-- Slider -->
          <div class="product-slider">
            <carousel
              :perPage="1"
              :paginationEnable="true"
               paginationColor="#b3b3b3"
               paginationActiveColor="#494ce8">
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="slide.name">
              </slide>
            </carousel>
          </div>

          <!-- content -->
          <div class="product-content">
            <h1 class="title">{{product.title}}</h1>
            <p>{{product.descr}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return{
          product: null
        }
    },
    created () {
    //console.log({route: this.$route, id: this.$route.params.id})
    let id = this.$route.params.id
    this.product = this.$store.getters.getProduct(id)
    //console.log(product)
    }
}
</script>

<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .product-slider,
  .product-contrnt {
    max-width: 48%;
    text-align: center;
  }
</style>

