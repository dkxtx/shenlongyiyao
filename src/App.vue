<template>
  <div id="app">
    <router-view/>
    <!-- <van-tabbar route active-color="#D5B388" inactive-color="#000">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // active: 0
    }
  }
}
</script>

<style>
/* .van-nav-bar .van-icon {
    color: #333333;
} */
</style>
