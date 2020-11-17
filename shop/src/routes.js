import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home'
import NotFoubd from '@/pages/404'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/shop',
            name: 'shop',
            component: Shop 
        },
        {
            path:'/shop/:id',
            name: 'product',
            component: Product 
        },
        {
            path: '*',
            name: 'notFoubd',
            component: NotFoubd
        }
    ]
})