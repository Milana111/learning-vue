<template>
<div class="wrapper">
<div class="wrapper-content">

  <section>
    <div class="container">

      <button class="btn btnPrimary" @click="modalFirst = !modalFirst"> Show firsr modal</button>
      <modals 
      title="First modal"
      v-show="modalFirst"
      @close = "modalFirst = false">

      <div slot="body">
        <p> text </p>
        <button class="btn btnPrimary" @click="modalFirst = !modalFirst"> Mell Done </button>
      </div>
 </modals>

<!--second mpdal-->
      <button class="btn btnPrimary" @click="modalSecond.show = !modalFirst"> Show modal with from</button>
      <modals 
      title="Modal with from"
      v-show="modalSecond.show"
      @close = "modalSecond.show = false">

      <div slot="body">
        <form @submit.prevent="submitSecondForm">
          <label>Name:</label>
          <input type="text" v-model="modalSecond.name">
          <label>Name:</label>
          <input type="text" v-model="modalSecond.email">
        <!--<p> text </p>-->
        <button class="btn btnPrimary" > Submit </button>
        </form>
      </div>
      
      </modals>
    </div>
  </section>
 
  </div>
</div>
</template>

<script>
import modals from '@/components/Modal.vue'
export default {
components:{ modals },
data(){
  return{
    modalFirst: false,
    modalSecond: {
      show: false,
      name:'',
      email:''
    }
  }

},
methods:{
  submitSecondForm () {
    console.log({
      name: this.modalSecond.name,
      email:this.modalSecond.email
    })
    name: this.modalSecond.name =''
    email:this.modalSecond.email =''
    email:this.modalSecond.show='folse'
  }
}
}
</script>


