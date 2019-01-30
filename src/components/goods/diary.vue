<template>
  <el-main>
    <el-date-picker value-format="yyyy-MM-dd" v-model="Time" type="date" placeholder="選擇日期">
    </el-date-picker>
    <el-button type="primary" icon="el-icon-search" @click="search">查詢</el-button>
    <el-table :data="data">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-table :data="scope.row.goods" style="width: 100%">
            <el-table-column prop="name" label="名稱">
            </el-table-column>
            <el-table-column prop="price" label="價格">
            </el-table-column>
            <el-table-column prop="quantity" label="數量">
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="time" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="PriceTotal" label="金額" width="180">
      </el-table-column>
      <el-table-column prop="QuantityTotal" label="數量">
      </el-table-column>
    </el-table>
  </el-main>
</template>
<script>
  const msgRef = firebase.database().ref('/Turkey/');

  export default {
    data() {
      return {
        data: [],
        Time: '',
      }
    },
    methods: {
      async search() {
        firebase.database().ref('/Turkey').remove().then(function(){
          console.log('成功');
        }).catch(e=>{
          console.log('e',e);
        });
        // this.getdata();
      },
      getdata() {
        msgRef.orderByChild("time").equalTo(this.Time).on("value", (data) => {
          let tempdata = [];
          let firebaseData = data.val();
          for (let item in firebaseData) {
            firebaseData[item].id = item;
            tempdata.push(firebaseData[item]);
          };
          this.data = tempdata;
          console.log("Equal to filter: " + tempdata);
        });
      },
      Today() {
        var date = new Date();
        const Y = date.getFullYear() + "-";
        const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1 + "-") :
          date.getMonth() + 1 + "-");
        const D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return Y + M + D;
      },

    },
    created() {
      this.Time = this.Today();
      this.getdata();
    },
  }

</script>
<style scoped lang="scss">
  // .el-main {
  //   width: calc(100% - 30%);
  //   height: calc(100vh - 120px);
  //   position: absolute;
  //   top: 120px;
  //   color: #333;
  //   text-align: center;
  // }

  // .main {
  //   width: 100%;
  //   height: calc(100vh - 120px);
  //   position: absolute;
  //   top: 120px;
  //   color: #333;
  //   text-align: center;
  // }

</style>
