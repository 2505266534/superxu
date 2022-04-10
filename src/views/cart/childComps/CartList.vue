<template>
  <div class="cart-list">
      <Scroll class="content" ref="scroll">
          <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"> </cart-list-item>
      <!-- <CartListItem v-for="(item,index) in cartList" :ket="index"></CartListItem> -->
      </Scroll>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll";
import CartListItem from './CartListItem.vue'

  export default {
    name: "Cart",
    data(){
      return {

      }
    },
    components:{
  Scroll,
  CartListItem
    },
    computed:{
      // cartlength(){
      //   return this.$store.getters.cartlength
      // }
     ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
.content {
   overflow: hidden;
   height: calc(100% - 44px - 49px - 40px);
}
.cart-list{
    height: 100%;
}
</style>
