import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fibonacci',
      name: 'fibonacci',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Fibonacci.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "about" */ './views/todo.vue')
    },
    {
      path: '/count-down',
      name: 'count-down',
      component: () => import(/* webpackChunkName: "about" */ './views/count-down.vue')
    },
    {
      path: '/viewport-component',
      name: 'viewport-component',
      component: () => import(/* webpackChunkName: "about" */ './views/viewport-component.vue')
    }
  ]
})
