<template>
  <div id="app">
    <!-- 点击导航后要切换的内容 -->
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <nav class="nav_box">
      <ul class="nav">
        <router-link :to="index" tag="li" active-class="active01">
          <div class="nav_item">首页</div>
        </router-link>
        <router-link :to="warning" tag="li" active-class="active02">
          <div class="nav_item">报警</div>
        </router-link>
        <router-link :to="task" tag="li" active-class="active03">
          <div class="nav_item">任务</div>
        </router-link>
        <router-link :to="about" tag="li" active-class="active04">
          <div class="nav_item">我的</div>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      index: '/index',
      warning: '/warning',
      task: '/task',
      about: '/about',
    }
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.clearfix{
  zoom:1;
}
.clearfix:after{
  content:"";
  clear:both;
  display:block;
}
a{
  text-decoration: none;
  color: #1587ca;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
}
.nav_box{
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
}
.nav{
  color: #1587ca;
  height: 1.96rem;
  font-size: .4rem;
  display: -webkit-flex;
  display: flex;
}
.nav li{
  flex: 1;
  box-sizing: border-box;
  text-align: center;
}
.nav img{
  width: 0.88rem;
  margin-top: 0.18rem;
}
.nav li:nth-child(1){
  background: url(./images/index/home_linearity.png) no-repeat;
  background-size: 0.88rem;
  background-position:center 0.18rem;
}
.nav li:nth-child(2){
  background: url(./images/index/alarm.png) no-repeat;
  background-size: 0.88rem;
  background-position:center 0.18rem;
}
.nav li:nth-child(3){
  background: url(./images/index/wait_for_completion.png) no-repeat;
  background-size: 0.88rem;
  background-position:center 0.18rem;
}
.nav li:nth-child(4){
  background: url(./images/index/personal_center.png) no-repeat;
  background-size: 0.88rem;
  background-position:center 0.18rem;
}
.nav_item{
  margin-top: 1.2rem;
}
</style>
