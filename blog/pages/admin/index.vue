<template>
<div> 
   <PostsList :admin=true :posts="$store.getters.getPostsLoaded" /> 
  {{postsLoaded}}
</div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'admin',
    computed: {
      postsLoaded () {
         axios.get('https://blog-nuxt-57867.firebaseio.com/posts.json')
             .then(res => {
                
                 const postsArray = []
                 for (let key in res.data) {
                     postsArray.push( { ...res.data[key], id: key } )
                 }
                // console.log(postsArray)
                 return [...postsArray].reverse()
             })
             .catch(e=> console.log(e))

        // console.log(this.$store.getters)
        // return this.$store.getters.getPostsLoaded
      }    
    }
}
</script>