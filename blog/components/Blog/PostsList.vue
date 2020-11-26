<template>
    <section class="post-list"> 
        <div class="container">
            <div class="post_wrapper">
                <postPreview 
                v-for="post in posts" 
                :key="post.id"
                :admin="admin" 
                :post="post"
                />
            </div>
        </div>
    </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview.vue'
export default {
    components: {
        postPreview
    },
    props: {
        posts: {
            type: Array,
            required: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
    .post_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>