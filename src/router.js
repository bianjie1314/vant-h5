import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import index from './views/index/index.vue'
import numberList from './views/numberList/numberList.vue'
import index170 from './views/170/index170.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'choiceNumber',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path: '/about', name:'about', component: About},
        {path: '/index', name:'index', component: index},
        {path: '/numberList', name:'numberList', component: numberList},
        {path: '/index170', name:'index170', component: index170},
        
      ]
    },
    {
      path: '/',
      name: '',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
