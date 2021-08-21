<template>
  <div class="index">
    <div class="nav">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox">侧边导航</label>
      <div class="side"></div>
    </div>

    <div class="mainBox">
      <div class="content">内容区域</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.index {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.mainBox {
  flex: 1;
}

.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

.nav > input {
  display: none;
}

.nav > label {
  position: absolute;
  top: 0;
  left: 200px;
  padding-left: 20px;
  cursor: pointer;
  transition: all .5s;
}

.nav > .side {
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  border-right: 1px solid #008c8c;
  background-color: skyblue;
  position: absolute;
  top: 0;
  left: 0;
  transition: all .5s;
}

/* 
（+）相邻兄弟选择器 
选择紧连着另一元素后的元素，二者具有相同的父元素。只会选择的一个相邻的匹配元素
*/
.nav > input:checked + label {
  left: 0;
}

/* 
（~）后续兄弟选择器 
选取指定元素之后所有的相邻兄弟元素。
*/
.nav > input:checked ~ .side {
  left: -200px;
}

.content{
  height: 100%;
  padding-left: 200px;
}
</style>>
