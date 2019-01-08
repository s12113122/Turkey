// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueFire)
Vue.config.productionTip = false
Vue.use(ElementUI)


// var config = {
//   apiKey: "AIzaSyCt0FwO1sqdRJZFj7mOG6fYdIbk0Ah1oYY",
//   authDomain: "turkey-84b12.firebaseapp.com",
//   databaseURL: "https://turkey-84b12.firebaseio.com",
//   projectId: "turkey-84b12",
//   storageBucket: "",
//   messagingSenderId: "988778393768"
// };
// firebase.initializeApp(config);

/* eslint-disable no-new */
export const db = firebase.firestore()
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
})
