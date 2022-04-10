<template>
  <div class="check-botton-bar">
    <div class="checkcont">
      <check-button :ischecked="ischeckeall" class="checks" @click.native="suan" />
      <span >全选</span>
      <div class="price">合计：{{ toprice }}</div>
      <div class="actu">去计算{{ checklength }}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  props: {
    // ischecked: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  computed: {
    ...mapGetters(["cartList"]),
    toprice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },

    checklength() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    ischeckeall() {
      if (this.cartList.length === 0) return false;
      //  return !(this.cartList.filter(item => !item.checked).length)
      return !this.cartList.find((item) => !item.checked);
    },
    // cartlength(){
    //   return this.$store.getters.cartlength
    // }
  },
  methods: {
    suan() {
      if(this.ischeckeall){
        this.cartList.forEach(item => item.checked = false)
      }else {
         this.cartList.forEach(item => item.checked = true)
      }
    },
  },
};
</script>

<style scoped>
.check-botton-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
}

.checkcont {
  display: flex;
  align-items: center;
}
.checks {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  flex: 1;
  margin-left: 20px;
}
.actu {
  background-color: orangered;
  width: 90px;
  color: #fff;
  text-align: center;
}
</style>
