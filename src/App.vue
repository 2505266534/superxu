<template>
  <div id="app">
  
  </div>
</template>
<script>

export default {
  name: "app",
  data() {
    return {
      message: "你好啊",
      // counter:0
    };
  },
  components: {
    // HelloWorld,
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sdd() {
      this.$store.commit("decrement");
    },
    add5(count) {
      this.$store.commit("increment5", count);
    },
    add10(){
      this.$store.commit('increment510')
    },
    listclick(){
      const res = {id:5,name:'ximen',age:35}
      this.$store.dispatch('listclicksa',res).then((res)=>{
        console.log(res);
      })
    },
    moderss(){
      this.$store.commit('moders')
    },
gaibi(){
  this.$store.dispatch('gaibia','里斯')
}
  },
  // componts:{
  //   HelloWorld,
  // }
};
</script>
<style>
</style>
