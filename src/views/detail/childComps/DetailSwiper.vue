<template>
    <swiper class="detail-swiper">
      <swiper-item
        class="detail-swiper"
        v-for="(item, index) in topImages"
        :key="index"
      >
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
// import SwiperItem from '@/components/common/swiper/SwiperItem.vue';
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
     
    };
  },
  created(){
    //  console.log(this.topImages);
  },
  methods: {
   
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
