const shopcart = {
  state: {
    goods: []
  },
  actions: {
    addGoods({commit}, goods){
      const name = this.state.ShopCart.goods.map(x=> {
        return x.name
      }).indexOf(goods.name);
      if( name == -1){
        commit('SET_addGoods',goods);
      } else {
        commit('SET_addGoods_quantity',name);
      }
      console.log('name',name);
      
      console.log('state',this.state.ShopCart.goods);
    },
    ClearShopCart({commit}){
      commit('SET_Clear');
    },
  },
  mutations: {
    SET_addGoods: (state, goods) =>{
      state.goods.push({
        name:goods.name,
        price:goods.price,
        quantity:1,
      })
    },
    SET_addGoods_quantity:(state,index) =>{
      state.goods[index].quantity = ++state.goods[index].quantity;
    },
    SET_Clear:(state) =>{
      state.goods= [];
    }
  },

}
export default shopcart;
