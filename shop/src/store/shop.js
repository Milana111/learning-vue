export default {
    state: {
        shopList: [
            {
                id: 1, 
                title: 'Nike Red', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                img: require('../assets/shop-img/1.png'),
                gallery: [
                    { name: 'Nike boots first', img: require('../assets/shop-img/1.png') },
                    { name: 'Nike boots second', img: require('../assets/shop-img/2.png') },
                    { name: 'Nike boots third', img: require('../assets/shop-img/3.png') },
                ]
            },
            {
                id: 2, 
                title: 'Nike Default', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                img: require('../assets/shop-img/4.png'),
                gallery: [
                    { name: 'Nike boots first', img: require('../assets/shop-img/4.png') },
                    { name: 'Nike boots second', img: require('../assets/shop-img/5.png') },
                    { name: 'Nike boots third', img: require('../assets/shop-img/6.png') },
                ]
            },
            {
                id: 3, 
                title: 'Nike Green', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                img: require('../assets/shop-img/7.png'),
                gallery: [
                    { name: 'Nike boots first', img: require('../assets/shop-img/7.png') },
                    { name: 'Nike boots second', img: require('../assets/shop-img/8.png') },
                    { name: 'Nike boots third', img: require('../assets/shop-img/9.png') },
                ]
            },
            {
                id: 4, 
                title: 'Nike Street', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                img: require('../assets/shop-img/10.png'),
                gallery: [
                    { name: 'Nike boots second', img: require('../assets/shop-img/11.png') },
                    { name: 'Nike boots third', img: require('../assets/shop-img/12.png') },
                ]
            },
        ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        getShopList (state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}