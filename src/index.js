import App from './app.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var app = new Vue(App)
app.$mount('#app')

