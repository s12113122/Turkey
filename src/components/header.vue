<template>
  <div class="food_Header">
    <el-button plain @click="routePush('Staple_food')">主食類</el-button>
    <el-button type="primary" plain @click="routePush('French')">薯條</el-button>
    <el-button type="success" plain @click="routePush('diary')">成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      routePush(name) {
        console.log(name);
        this.$router.push({
          name: name,
        })
      }
    },
  }

</script>
<style lang="scss" scoped>
  .el-header {
    // background-color: #B3C0D1;
    color: #333;
    width: calc(100vw - 300px);
    text-align: center;
    height: 120px !important;
    line-height: 120px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .food_Header {
    padding: 0 16px;
    overflow: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 99;
    width: 100%;
    // width: calc(100vw - 300px);
    height: 120px !important;
    line-height: 120px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
  }

</style>
