import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/Home'
import NotFoubd from '@/pages/404'


export default new Router({
    //mode:'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'*',
            name: 'notFoubd',
            component: NotFoubd
        }
    ]
})