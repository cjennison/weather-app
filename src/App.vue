<template lang='pug'>
  #app
    Row
      Col(:span="12", :offset="6")
        Card
          .card-header(slot="header") Weather Powered Email
          EmailSubscription
</template>

<script>
import EmailSubscription from './components/controllers/EmailSubscription.vue'

import { Header, Card, Row, Col } from "element-ui";

export default {
  name: 'app',
  components: {
    Card,
    Col,
    EmailSubscription,
    Header,
    Row
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
