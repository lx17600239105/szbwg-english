// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  'jquery': $,
  router,
  components: { App },
  template: '<App/>'
})
