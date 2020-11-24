<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <div class="notify__wrapper">
          <div class="notify-title">
            <h1><b>Notify App</b></h1>
            <svg style="cursor: pointer;" @click="getNotifyLazy" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-counterclockwise" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
            </svg>
          </div>

          <div class="notify__content">
            <preloader v-show="loading"/>
            <div class="error">
              <p v-if="error">{{ error }}</p>
            </div>
            <notify v-show="!loading && !error" :messages="messages"/>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script>
import notify from '@/components/Notify.vue'
import preloader from '@/components/UI/Preloader.vue'
import axios from 'axios'
export default {
  components: { notify, preloader },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  mounted () {
    this.getNotify()
  },
  computed: {
    messages () {
      return this.$store.getters.getMessageMain
    }
  },
  methods: {
    getNotifyLazy() {
       this.loading = true
      setTimeout(() => {
        this.getNotify()
      }, 1800)
    },
    getNotify () {
      this.loading = true
      axios
      .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
        .then(response => {
          let res = response.data.notify,
              messages = [],
              messagesMain = [];
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) messagesMain.push(res[i])
            else messages.push(res[i])
          }
          console.log({messages, messagesMain});
          this.$store.dispatch('setMessage', messages)
          this.$store.dispatch('setMessageMain', messagesMain)
        })
        .catch(error => {
          console.log(error);
          this.error = 'Error: Network Error'
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify__wrapper {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 12px 0 rgba(0,0,0,.1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.notify-title {
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.error {
  color: rgb(196, 67, 67);
}
</style>