<template>
  <div class="aboutus" :style="{minHeight:fullHeight+'px'}">
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
    name: 'aboutus',
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
        swiperOption: {// 以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          notNextTick: true,
          autoplay: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
        indexData: []
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      this.axios.get('login/webService/getLmDataJson?lmType=L0902&pageSize=20').then((res) => {
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
