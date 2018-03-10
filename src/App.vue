<template lang='pug'>
  #app
    el-row
      el-col(:span="12", :offset="6")
        el-card(style="background: rgba(255, 255, 255, 0.95);")
          .card-header(slot="header") Weather Powered Email
          EmailSubscription
</template>

<script>
import EmailSubscription from './components/controllers/EmailSubscription.vue'


export default {
  name: 'app',
  components: {
    EmailSubscription
  }
}
</script>

<style lang='scss'>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
