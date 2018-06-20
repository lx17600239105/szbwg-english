import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import exhibit from '@/components/exhibit/exhibit'
import collect from '@/components/collect/collect'
import virtual from '@/components/virtual/virtual'
import aboutus from '@/components/aboutus/aboutus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/exhibit',
      name: 'exhibit',
      component: exhibit
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/virtual',
      name: 'virtual',
      component: virtual
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }
  ]
})
