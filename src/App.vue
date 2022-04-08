<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
     <MainTabBar></MainTabBar>
  </div>
</template>
<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
 
  name: "app",
  data() {
    return {
      message: "你好啊",
      // counter:0
    };
  },
  components: {
    MainTabBar
  },
  methods: {
 
  },
  // componts:{
  //   HelloWorld,
  // }
};
</script>
<style>
  @import "assets/css/base.css";
</style>
