<template>
  <div>
    <NavBar
      >
      <div slot="left" class="back" @click="backclick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div class="title-item" v-for="(item, index) in titles" @click="itemindex(index)" :class="{active:index === activeindex}"  :key="index">
          {{ item }}
        </div>
      </div></NavBar
    >
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      activeindex:0
    };
  },
  methods:{
      itemindex(index){
          this.activeindex = index
          this.$emit('navclick',index)
      },
      backclick(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
    color: var(--color-high-text)
  }

  .back img {
    margin-top: 12px;
  }
</style>
