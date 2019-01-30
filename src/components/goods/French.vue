<template>
  <!-- <div> -->
    <!-- <el-container> -->
      <!-- <Aside></Aside> -->
      <!-- <el-aside>Aside</el-aside> -->
      <!-- <el-container> -->
        <!-- <Header></Header> -->
        <!-- <el-header class="food_Header">Header</el-header> -->
        <el-main>
          <el-row type="flex" class="food_main">
            <el-card shadow="hover" class="food_card" v-for="(item,index) in foods" :key="index">
              <img :src="item.imgUrl" class="image">
              <div>
                <p>{{item.name}}</p>
                <p>{{item.price}}元</p>
              </div>
            </el-card>
          </el-row>
        </el-main>
      <!-- </el-container> -->
    <!-- </el-container> -->
  <!-- </div> -->
</template>

<script>
  // const msgRef = firebase.database().ref('/TurKey/goods');
  // const User = firebase.database().ref('/user/');
  // import {
  //   db
  // } from "../db";
  import Aside from '@/components/aside.vue'
  import Header from '@/components/header.vue'
  import foodslist from '@/data/foods2.json'

  export default {
    name: "HelloWorld",
    data() {
      return {
        foods: [
        ],
        districts: [],
        messages: [],
        msg: "Welcome to Your Vue.js App"
      };
    },
    // firestore() {
    //   return {
    //     locations: db.collection('districts').orderBy('formName')
    //   }
    // },
    components: {
      Aside,
      Header,
    },
    methods: {
      test() {
        db.collection('districts')
          .add({
            formName: '123',
            test: '456'
          })
        // msgRef.once('value', function (snapshot) {
        //   var val = snapshot.val();
        //   console.log(val);
        // });
        // msgRef.push([{
        //   name: '123',
        //   price: 456,
        //   count: 5,
        // }])
        console.log('123');
      },
    },
    created(){
    },
    mounted() {
      const vm = this;
      this.foods = foodslist;
      // msgRef.on('value', function (snapshot) {
      //   const val = snapshot.val();
      //   vm.messages = val;
      //   console.log(vm.messages);
      // })
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-header {
    // background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 120px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  // .el-aside {
  //   @media all and(max-width: 1100) {
  //     min-width: 300px;
  //   }
  //   padding: 10px;
  //   background: #fbfcff;
  //   border-right: 1px solid #e7e7e7;
  //   // background-color: #D3DCE6;
  //   color: #333;
  //   text-align: center;
  //   line-height: 200px;
  // }

  .el-main {
    height: calc(100vh - 120px);
    /* background-color: #E9EEF3; */
    position: absolute;
    top: 120px;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .food_card {
    &:hover{
      cursor: pointer;
    }
    height: 200px;
    width: 200px;
    margin-bottom: 1rem;
    margin-right: 1rem;

    img {
      width: 60%;
    }

    p {
      margin-bottom: 8px;
      color: #606266;
    }
  }

  .food_Header {
    height: 120px !important;
  }

  .food_main {
    display: inline-flex;
    flex-wrap: wrap;
  }

</style>
