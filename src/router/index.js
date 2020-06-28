import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, form, savedPosition) {
    return {x: 0, y: 0}
  }// 每次做路由切换的时候，始终回到最顶部
})
