import Vue from 'vue'
import App from './App.vue'
// 引入路由实例
import router from './router'

// 引入公共样式
import './assets/common.css'

// 引入 element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用 Vue.use 安装一下
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
