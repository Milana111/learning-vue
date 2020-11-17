import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import shop from './shop'


export default new Vuex.Store ({
    modules: {
        shop
    }
})