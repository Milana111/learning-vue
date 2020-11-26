<template>
    <section class="new-post">
        <div class="container">
            <form @submit.prevent="onSubmit"> 
                <AppInput v-model="post.title"> Title </AppInput>
                <AppInput v-model="post.descr"> Descr </AppInput>
                <AppInput v-model="post.img"> Img Link: </AppInput>
                <AppTextArea v-model="post.content"> content </AppTextArea>
                
                <div class="controls">
                    <div @click="cancel" class="btn btnDanger"> Cancel </div>
                    <AppButton  > Save </AppButton>
                </div>
            
            </form>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        postEdit: {
            type: Object,
            required: false
        }
    },
    data () {
        return {
            post: this.postEdit ? { ...this.postEdit } : { 
                title: '',
                descr: '',
                img: '',
                content: ''
            },
        }
    },
    methods: {
        onSubmit () {
            this.$emit('submit', this.post)
        },
        cancel () {
            this.$router.push('/admin/')
        }
    }
}
</script>

<style lang="scss">
    .new-post {
        background-color: #37f78d;
        margin-top: 80px;
    }
    .controls {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
</style>