<template>
  <div class="exhibit" :style="{minHeight:fullHeight+'px'}">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper_slide"  v-for="(swiperItem,index) in indexData" :key="index">
        <a href="" class="swiper_a" :style="{height:500+'px',backgroundImage:'url(http://shenbo.artup.com/p'+swiperItem.showPic+')'}"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="list">
      <table id="tableList">
        <thead>
             <tr>
                 <th><input type="checkbox" v-model="isCheckedAll">全选</th>
                 <th>歌单</th>
                 <th>歌手</th>
                 <th>专辑</th>
             </tr>
        </thead>
        <tbody>
            <tr v-for="(itemList,index) in listData" :key="index">
              <td><input type="checkbox" v-model="itemList.checked"></td>
              <td>{{itemList.name}}</td>
              <td>{{itemList.song}}</td>
              <td>{{itemList.album}}</td>
            </tr>
        </tbody>
      </table>
      <div class="album">选中的歌手有{{selectedAllLen}}位,专辑有{{album}}张</div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'exhibit',
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
        swiperOption: {// 以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          initialSlide: 0,
          notNextTick: true,
          autoplay: 3000,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observer: true
        },
        indexData: [],
        listData: [
          {
            id: Math.random(),
            name: '等着你',
            song: '泡米',
            checked: false,
            album: 10
          },
          {
            id: Math.random(),
            name: '和圣诞',
            song: '啦啦队',
            checked: false,
            album: 5
          },
          {
            id: Math.random(),
            name: '谁卡的',
            song: '啊看两三点',
            checked: false,
            album: 2
          },
          {
            id: Math.random(),
            name: '了哈师大',
            song: '昂好的',
            checked: false,
            album: 1
          },
          {
            id: Math.random(),
            name: '阿斯顿',
            song: '萨克的萨连科的',
            checked: false,
            album: 8
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      mySwiper() {
        return this.$refs.mySwiper.swiper
      },
      // 对计算属性操作
      // 对计算属性只有一个函数，默认这个函数只在取值的时候触发的
      // 取值 get
      // 设置值 set
      isCheckedAll: {
          get() {
            return this.listData.every(function(item) {
              return item.checked
            })
          },
          set(newValue) {
            return this.listData.forEach(itemList =>
              (itemList.checked = newValue)
            )
          }
      },
      selectedAllLen() {
        return this.listData.filter(item => item.checked).length
      },
      album() {
        return this.listData.reduce((n, item2) => {
            return n + item2.album
        }, 0)
      }
    },
    mounted() {
      this.axios.get('login/webService/getLmDataJson?lmType=L0201&pageSize=20').then((res) => {
        this.indexData = res.data.entitys
      })
    }
  }
</script>

<style>
.swiper_a{
  display:block;
  background-size:auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
#tableList{
  width: 800px;
  margin: 80px auto;
}
#tableList,tr,td,th{
  border:1px solid #000;
}
#tableList tr{
  height:30px;
  line-height:30px;
}
#tableList tr td{
  width:25%;
}
</style>
