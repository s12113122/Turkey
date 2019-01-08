<template>
  <el-aside>Aside</el-aside>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }

</script>
<style scoped lang="scss">
  .el-aside {
    @media all and(max-width: 1100) {
      min-width: 300px;
    }
    height: 100vh;
    padding: 10px;
    background: #fbfcff;
    border-right: 1px solid #e7e7e7;
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

</style>
