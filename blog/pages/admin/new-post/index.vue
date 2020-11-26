<template>
    
    <newPostFrom @submit="onSubmit" />

</template>

<script>
import newPostFrom from '@/components/Admin/NewPostFrom.vue'

export default {
    components: { newPostFrom },
    layout: 'admin', 
    methods: {
        onSubmit (post) {
            this.$store.dispatch('addPost', post )
                .then (() => {
                    this.$router.push('/admin')
                }) 
        }
    }

}
</script>