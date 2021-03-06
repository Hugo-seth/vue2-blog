// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import './registerServiceWorker'
import './app.less'
import App from './App'
import HomePage from './components/HomePage'

/* eslint-disable no-new */
Vue.use(VueRouter)

const routes = [
  { path: '/articles', component: HomePage },
  {
    path: '/articles/:number',
    component: function(resolve) {
      require(['./components/articleDetail'], resolve)
    }
  },
  { path: '', redirect: '/articles' },
  { path: '*', redirect: '/articles' }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
