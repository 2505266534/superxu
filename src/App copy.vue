<template>
  <div id="app">
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.moder1}}</h2>
    <h2>{{$store.getters.moder2}}</h2>
    <h2>{{$store.getters.moder3}}</h2>
    <h2>{{$store.getters.moder4}}</h2>
   <button @click="gaibi">便</button>
    <h2>mutations方法</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sdd">-</button>
    <button @click="add5(5)">+</button>
    <button @click="add10">+</button>
    <hello-world />
<h2>getters方法</h2>
<h2>{{$store.getters.maxage}}12</h2>
<h2>{{$store.getters.maxage2}}</h2>
<h2>{{$store.getters.maxage3(21)}}</h2>
<h2>{{$store.getters.maxage4(2)}}</h2>
<h2>{{$store.getters.maxage5}}</h2>

<h2>actions方法</h2>
<button @click="listclick">添加到数组</button>


    <!-- <HelloWorld :counter="counter" ></HelloWorld> -->
    <!-- <router-view/> -->
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "app",
  data() {
    return {
      message: "你好啊",
      // counter:0
    };
  },
  components: {
    HelloWorld,
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
