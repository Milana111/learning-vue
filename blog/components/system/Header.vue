<template>
<header>
    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <div class="logo"><nuxt-link to="/">Milana blog</nuxt-link></div>
                    
                    <ul class="navbar-list">
                        
                        <li class="navbar-item" v-for="link in links" :key="link.title">
                            <nuxt-link class="navbar-link" :title="link.title" :to="link.url"> {{ link.title}} </nuxt-link>
                        </li>

                    </ul>   
            </div> 
        </div>
    </div>
</header>
    

</template>

<script>
export default {
    data () {
        return {
            links: [
                { title: 'Blog', url: '/blog'},
                { title: 'About', url: '/about'}
            ]
        }
    }
}
</script>

<style lang="scss">
.logo a {
    color:#37f78d;
}
.navbar-link {
    &.nuxt-link-exact-active {
            color:#37f78d;
            // color: #b00b69;
        }
    }
</style>