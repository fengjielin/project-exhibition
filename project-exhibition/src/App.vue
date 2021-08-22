<template>
  <div id="app">
    <NavBar :sideArr="sideArr" :intro="intro" />
    <router-view></router-view>
    <footer>&copy;版权所有</footer>
  </div>
</template>

<script>
import NavBar from "components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      intro: {
        portrait: "portrait.png",
        text: "加油！冯杰林",
      },
      sideArr: [
        { icon: "icon-alone-side-left", title: "展示", routerUrl: "/" },
        { icon: "icon-alone-side-left", title: "编写", routerUrl: "/edit" },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.mainBox {
  background-color: #ecf0f1;
  flex: 1;
  overflow-y: auto;
}
.content {
  height: 100%;
  padding: 35px 250px 0;
  box-sizing: border-box;
}

footer{
  text-align: center;
  background-color: #ecf0f1;
  padding: 10px 200px;
  box-sizing: border-box;
}
</style>
