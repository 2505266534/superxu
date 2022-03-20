<template>
  <div>
     <!-- <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar> -->
    <NavBar class="home-nav"><div  slot="center">购物街</div></NavBar>
    <home-swiper :banners="banners"/>
    <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners);
    });
  },
  methods: {},
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
