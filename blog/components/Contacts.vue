<template>
    
    <section class="contact">
        <div class="container">
            <h2 class="title"> Contact me! </h2>
            
            <Message v-if="message" :message="message" />
            <form class="contact-form" @submit.prevent="onSubmit">
            

            <AppInput v-model="user.name"> Name: </AppInput>
            
            <AppInput v-model="user.email" type="email">Email: </AppInput>
           
            <AppTextArea v-model="user.text"> Text: </AppTextArea>

            <div class="controls">
                <AppButton class="btnWhite"> Submit! </AppButton>
            </div>
            </form>
        </div>
    </section>

</template>

<script>
import Message from '@/components/UI/Message.vue'
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

export default {
    components: {
        Message, AppButton, AppInput, AppTextArea
    },
    data () {
        return {
            message: null,
            user: {
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.message = 'Submitted!'
            //console.log(this.user)
            this.user.name = ''
            this.user.email = ''
            this.user.text = ''
        }
    }
}
</script>

<style lang="scss">
    
    .contact {
        text-align: center;
        background-color: #37f78d;
        h2 {
            color: white;
        }
        label {
            color: white;
        }
    }
   
    .contact-form {
        
        max-width: 1600px;
    }
</style>