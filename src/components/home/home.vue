<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide class="swiper_slide"  v-for="(swiperItem,index) in indexData" :key="index">
      <a href="" class="swiper_a" :style="{height:fullHeight + 'px',backgroundImage:'url(http://shenbo.artup.com/p'+swiperItem.showPic+')'}"></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        initialSlide: 0,
        pagination: '.swiper-pagination',
        loop: true,
        speed: 400,
        direction: 'horizontal',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true
      },
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      indexData: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    tabHandle(idx) {
      this.ActiveIndex = idx
      this.ActiveI = idx
    }
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
     const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
    this.axios.get('login/webService/getLmDataJson?lmType=L0101&pageSize=20').then((res) => {
      this.indexData = res.data.entitys
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
 .hello{
   margin-top:80px;
 }
 .tablist{
    position:relative;
    display:inline-block;
    height:100px;
 }
  input{
   height:30px;
   width:200px;
    border:1px solid #dddddd;
    font-size:24px;
  }
  .swiper_a{
    display:block;
    background-size:auto 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
