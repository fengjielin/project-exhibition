<template>
  <div id="app">
    <!-- <Index></Index> -->
    <!-- <router-link to='/index'>首页</router-link>
    <router-link to='/details'>详情页</router-link> -->

    <router-view ></router-view>
  </div>
</template>

<script>
import Index from '@/views/index/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 35px; */
}
</style>
