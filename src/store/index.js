import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import ShopCart from './modules/shopcart.js'


Vue.use( Vuex );
const store = new Vuex.Store({
  modules:{
    ShopCart,
  },
  getters,
});

export default store;