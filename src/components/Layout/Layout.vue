<template>
  <el-container>
    <Aside></Aside>
    <el-container>
      <Header></Header>
      <router-view />
    </el-container>
  </el-container>
</template>
<script>
  import Aside from '@/components/aside.vue'
  import Header from '@/components/header.vue'
  export default {
    data() {
      return {}
    },
    components: {
      Aside,
      Header,
    },
  }

</script>
