<template>
  <div class="nav">
    <input type="checkbox" id="checkbox" />
    <label for="checkbox">
      <i class="iconfont icon-alone-side-left"></i>
    </label>
    <nav>
      <a href="javascript:void(0)">博文总览</a>
      <a href="javascript:void(0)">编写博文</a>
    </nav>
    <div class="side">
      <ul>
        <li>
          <span
            class="portrait"
            :style="{
              background: intro.portrait
                ? `url(${require(`../../assets/images/${intro.portrait}`)}) no-repeat center/cover`
                : `#008c8c`,
            }"
          ></span>
          <span>{{ intro.text }}</span>
        </li>
        <li
          v-for="(item, index) in sideArr"
          :key="index"
          @click="activeIndex = index"
          :class="{ active: activeIndex == index }"
        >
          <router-link :to="item.routerUrl">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sideArr: Array,
    intro: {
      type: Object,
      default() {
        return {
          portrait: "",
          text: "",
        };
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style scoped>
nav{
  text-align: center;
}
nav>a{
  display: inline-block;
  height: 100%;
  padding: 0 10px;
}

.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 999;
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
  transition: all 0.5s;
}

.nav > .side {
  width: 200px;
  height: 100vh;
  padding-top: 20px;
  box-sizing: border-box;
  border-right: 1px solid #95a5a6;
  background-color: #34495e;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
}

.side ul li {
  margin-bottom: 10px;
}

.side ul li:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
  border-left: 0;
  cursor: auto;
}

.side ul li:first-child .portrait {
  display: block;
  width: 80px;
  height: 80px;
  /* background: #008c8c url("~assets/images/portrait.png") no-repeat center/cover; */
  border-radius: 50%;
}

.side ul li:first-child span {
  color: #fff;
  white-space: nowrap;
}

.side ul li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #d2d2d2;
  text-decoration: none;
  border-left: 6px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
}

.side ul li>a{
  display: inline-block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: inherit;
}

.side ul li i {
  padding-left: 35px;
  padding-right: 5px;
  box-sizing: border-box;
  font-size: 18px;
}

.side ul li span {
  font-size: 14px;
}

.side ul li:hover {
  color: #fff;
}

.active {
  color: #fff !important;
  border-left-color: #008c8c !important;
}

/* 
（+）相邻兄弟选择器 
选择紧连着另一元素后的元素，二者具有相同的父元素。只会选择的一个相邻的匹配元素
*/
.nav > input:checked + label {
  transform: rotateY(180deg);
  left: 20px;
}

/* 
（~）后续兄弟选择器 
选取指定元素之后所有的相邻兄弟元素。
*/
.nav > input:checked ~ .side {
  left: -200px;
}
</style>