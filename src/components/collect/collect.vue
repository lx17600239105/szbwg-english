<template>
  <div class="collect" :style="{minHeight:fullHeight+'px'}">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper_slide"  v-for="(swiperItem,index) in indexData" :key="index">
        <a href="" class="swiper_a" :style="{height:500+'px',backgroundImage:'url(http://shenbo.artup.com/p'+swiperItem.showPic+')'}"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'collect',
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30
        },
        indexData: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      mySwiper () {
        return this.$ref.mySwiper.swiper
      }
    },
    mounted() {
      this.axios.get('login/webService/getLmDataJson?lmType=L0301&pageSize=20').then((res) => {
        this.indexData = res.data.entitys
      })
    }
  }
</script>

<style scoped>
  .swiper_a{
    display:block;
    background-size:auto 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
