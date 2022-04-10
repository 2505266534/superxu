<template>
  <div class="check-botton" :class="{check:ischecked}">
   <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>


  export default {
    name: "Cart",
    data(){
      return {

      }
    },
    components:{
     
    },
    props:{
        ischecked:{
            type:Boolean,
            default:false
        }
    },
    computed:{
      // cartlength(){
      //   return this.$store.getters.cartlength
      // }
   
    }
  }
</script>

<style scoped>
.check-botton {

  border: 2px solid #aaa;
  border-radius: 50%;
}
.check{
    border-color:red;
      background-color: red;
}
</style>
