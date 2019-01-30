import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
// import Staple_food from '@/components/goods/Staple_food.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: Layout,
    children: [{
        path: '/Staple_food',
        name: 'Staple_food',
        component: () => import('@/components/goods/Staple_food.vue'),
      },
      {
        path: '/French',
        name: 'French',
        component: () => import('@/components/goods/French.vue'),
      },
      {
        path: '/diary',
        name: 'diary',
        component: () => import('@/components/goods/diary.vue'),
      },
    ]
  }, ]
})
