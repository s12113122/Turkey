<template>
  <el-aside class="aside">
    <div class="ttt">
      還沒想到要幹嘛AAAA
      <div class="foot-statistical"><span><small>数量：</small>{{quantityTotal()}}</span> <span><small>金额：</small>{{priceTotal()}}元</span></div>
      <el-button type="success" icon="el-icon-check" size="mini" @click="Checkout()">結帳</el-button>
    </div>
    <div>
      <el-table :data="ShopCart.goods" stripe style="width: 100%">
        <el-table-column prop="name" label="名稱">
        </el-table-column>
        <el-table-column prop="price" label="價格">
        </el-table-column>
        <el-table-column prop="quantity" label="數量">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120px">
          <template slot-scope="scope">
            <el-button style="padding: 5px;" type="danger" icon="el-icon-delete" size="mini"></el-button>
            <el-button style="padding: 5px;" type="primary" icon="el-icon-plus" size="mini"></el-button>
            <el-button style="padding: 5px;" type="success" icon="el-icon-minus" size="mini"></el-button>
          </template>
        </el-table-column>
      </el-table>
      {{ShopCart}}
    </div>
  </el-aside>
</template>
<script>
  const msgRef = firebase.database().ref('/Turkey/');
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    data() {
      return {
        data: {
          PriceTotal: 270,
          QuantityTotal: 9,
          time: "2019-01-16",
          goods: [{
            "name": "漢堡2",
            "price": 30,
            "quantity": 1
          }, {
            "name": "漢堡5",
            "price": 30,
            "quantity": 1
          }, {
            "name": "漢堡6",
            "price": 30,
            "quantity": 1
          }, {
            "name": "漢堡3",
            "price": 30,
            "quantity": 1
          }, {
            "name": "漢堡1",
            "price": 30,
            "quantity": 5
          }]
        },
      }
    },
    computed: {
      ...mapGetters([
        'ShopCart'
      ]),

    },
    methods: {
      quantityTotal() {
        let Total = 0
        for (let item of this.ShopCart.goods) {
          Total += parseInt(item.quantity);
        }
        return Total
      },
      priceTotal() {
        let Total = 0
        for (let item of this.ShopCart.goods) {
          Total += parseInt(item.quantity * item.price);
        }
        return Total
      },
      getTime() {
        var date = new Date();
        const Y = date.getFullYear() + "-";
        const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1 + "-") :
          date.getMonth() + 1 + "-");
        const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return Y + M + D;
      },
      async Checkout() {
        console.log('this.data', this.data);
        const PTotal = this.priceTotal();
        msgRef.push({
          goods: this.ShopCart.goods,
          PriceTotal: PTotal,
          QuantityTotal: this.quantityTotal(),
          time: this.getTime(),
        });
        // for (let i = 0; i < 2; i++) {
        //   msgRef.push(this.data);
        // }
        this.$store.dispatch('ClearShopCart');
      },
    },
    created() {}
  }

</script>
<style scoped lang="scss">
  .ttt {
    height: 110px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
  }

  .el-aside {
    @media all and(max-width: 1100) {
      min-width: 30%;
    }

    width: 30% !important;
    height: 100vh;
    padding: 10px;
    background: #fbfcff;
    border-right: 1px solid #e7e7e7;
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    // line-height: 200px;
  }

</style>
