// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 是否配置生产
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
	// 根节点为App.vue的模板
  el: '#app',
  router,
	// 根节点的组件
  components: { App },
  template: '<App/>'
})
