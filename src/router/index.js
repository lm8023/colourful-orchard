import Vue from 'vue'
import Router from 'vue-router'
import Home from '@page/home/Home'
import Cart from '@page/cart/Cart'
import Person from '@page/person/Person'
import Search from '@page/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
