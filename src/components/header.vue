<template>
  <div class="food_Header">

    <el-button plain>朴素按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>


  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
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
    overflow:auto;
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
