<template>
    
    <section class="new-comment">
        <div class="container">
            
            <h2 class="title"> Write comment </h2>
            
            <form class="comment-form"  @submit.prevent="onSubmit">
            
            <Message v-if="message" :message="message" />

            <AppInput v-model="comment.name" type="text"> Name: </AppInput>
            
            <AppTextArea class="textpad" v-model="comment.text"> Text:</AppTextArea> 

            <div class="controls">
                <AppButton> Submit! </AppButton>
            </div>
            </form>
            </div>
            
        
    </section>

</template>

<script>

export default {
    props: {
        postId: {
            type: String,
            required: true
    }
},
    data () {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$store.dispatch('addComment', {
                
                postId: this.postId,
                publish: false,
                ...this.comment 
            })
            .then(()=> {
                this.message = 'Submitted'
                this.comment.name = '',
                this.comment.text = ''
                console.log(this.comment)
            })
            .catch(e => {console.log(e)})
            
        }
    }
}
</script>

<style lang="scss">
    .new-comment {
        text-align: center;
        background-color: #37f78d;
        
    }
    
    .new-comment {
        h2 {
            color: white;
        }
        label {
            color: white;
        }
    }
    
</style>
