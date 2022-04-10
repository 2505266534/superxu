<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartlength}})</div>
    </nav-bar>
    <CartList />
    <CheckButtonbuy/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from './childComps/CartList'
import CheckButtonbuy from './childComps/CheckButtonbuy'

import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    data(){
      return {

      }
    },
    components:{
      NavBar,
      CartList,
      CheckButtonbuy
      // Scroll
    },
    computed:{
      // cartlength(){
      //   return this.$store.getters.cartlength
      // }
      ...mapGetters(['cartlength'])
    }
  }
</script>

<style scoped>
/* .cart {
  height: 100vh;
} */
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
