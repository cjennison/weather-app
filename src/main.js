import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {locale: enLocale})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
