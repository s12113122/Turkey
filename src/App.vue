<template>
  <div id="app">
    <el-container>
      <Aside></Aside>
      <el-container>
        <Header></Header>
        <!-- <img src="./assets/logo.png"> -->
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Aside from '@/components/aside.vue'
  import Header from '@/components/header.vue'
  export default {
    name: 'App',
    components: {
      Aside,
      Header,
    },
  }

</script>

<style>
  @import "../static/css/main.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-attachment: #f0f0f0;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  body {
    margin: 0px;
    padding: 0px;
  }

</style>
