export default {
    state: {
        shopList: []
    },
    mutations: {
        
    },
    actions: {
        axios
       .get(`server?id=${id}`)
    },
    getters: {
        getShopList (state) {
          return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    },
}
