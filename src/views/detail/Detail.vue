<template>
  <div id="detail">

    <detail-nav-bar class="detail-nav" @navclick="navclick" ref="nav" />
  
    <scroll  class="content" ref="scroll" :probeType="3" @scroll="scrolloit">
     
    
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info ref="params" :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="conmt" :param-info="paramInfo" />
      <good-list ref="conlist" :goods="recommends" />
     
    </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop" />
       <detail-bottom @addclickh="addclickh" />
   
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottom from "./childComps/DetailBottom";

import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import { detailed, Goods, Shop, GoodsParam, recommend } from "network/detail";
import { debounce, itemlinter } from "@/common/utils";
import {mapActions} from 'vuex'
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    GoodList,
    DetailBottom,
    BackTop
  },
  mixins: [itemlinter],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      themeYopYs: [],
      offsetTop: "",
      recommends: [],
       isShowBackTop: false,
       product:{},
       show:false,
       message:''
    };
  },
  updated() {
    //也可以不监听图片直接用这个方法
    //  this.$refs.scroll.refresh()
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    detailed(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据

      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
    recommend().then((res) => {
      this.recommends = res.data.list;
    });

    this.getimrt = debounce(() => {
      this.themeYopYs = [];
      this.themeYopYs.push(0);
      this.themeYopYs.push(this.$refs.params.$el.offsetTop);
      this.themeYopYs.push(this.$refs.conmt.$el.offsetTop);
      this.themeYopYs.push(this.$refs.conlist.$el.offsetTop);
      this.themeYopYs.push(Number.MAX_VALUE);
      // console.log(this.themeYopYs);
    }, 100);
  },
  mounted() {
    //混入了不需要這裏
    // let refresh = debounce(this.$refs.scroll.refresh,100)
    // this.homeitemImageLoad = ()=>{
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad',this.homeitemImageLoad)
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.homeitemImageLoad);
  },

  methods: {
   
    ...mapActions({
      addclick:'addclick'
    }),
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    addclickh(){
       const product = {}
       product.image = this.topImages[0]
         product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice
        product.iid = this.iid;
      this.addclick(product).then(res=>{
      //     this.show = true
      //   this.message = res
        
      //  setTimeout(()=>{
      //     this.show = false
      //  },1000)
        this.$toast.show(res,1000)
     
      })
  
      this.$store.dispatch('addclick',product)
      //  将商品添加到购物车

    },
    imageLoad() {
      this.refresh();
      this.getimrt();
    },
    navclick(index) {
      //  console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeYopYs[index], 100);
    },
    scrolloit(position) {
       this.isShowBackTop = -position.y > 1000;
      const positiony = -position.y;
      let leght = this.themeYopYs.length;
      // for (let i = 0; i < leght; i++) {
      //    //复杂方法
      //    if(this.activeindex !==i && ((i<leght-1 && positiony>=this.themeYopYs[i] && positiony<this.themeYopYs[i+1])||(i===leght -1 &&positiony>=this.themeYopYs[i] ))){
      //      this.activeindex = i
      //      this.$refs.nav.activeindex = this.activeindex
      //    }
      // }
      //下一种方法在数组里面push一个最大值
      for (let i = 0; i < leght-1; i++) {
        if(this.activeindex !== i && (positiony>=this.themeYopYs[i] && positiony<this.themeYopYs[i+1] )){
           this.activeindex = i
           this.$refs.nav.activeindex = this.activeindex
        }
      }
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}

</style>
