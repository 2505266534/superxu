<!-- xx -->
<template>
  <div v-if="Object.keys(commentInfo).length !== 0">
   <div class="info-header">
     <div class="info-title">用户评价</div>
     <div class="info-more">
       更多
       <i class="arrow-right"></i>
       </div>
   </div>
   <div class="info-user">
     <img src="commentInfo.user.avatar" alt="">
   </div>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },
props:{
  commentInfo:{
     type:Object,
     default:()=>[]
  }
},
  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style  scoped>
</style>