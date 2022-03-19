import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request}from './unitls/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// import { pop } from 'core-js/core/array'
//封装之后请求网络 


//这些都不是最好的方法
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
//并发请求
// axios.all([request({url:'/home/multidata'}),request({url:'/home/data', params: { type: 'pop', page: 5 }})]).then(axios.spread((res,res2)=>{
//   console.log(res);
//   console.log(res2);
// }))

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })
// request({
//   baseConfig:{
//     url: '/home/multidata'
//   },
//   success(res){
// console.log(res);
//   },
//   failure(err){

//   }
// })



//全局
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000
//单个请求
// axios({
//   // url:'http://123.207.32.32:8000/home/multidata',
//   url:'http://123.207.32.32:8000/home/data',
//   method:'get',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then((res=>{
//   console.log(res);
// }))
//并发请求
// axios.all([axios({ url: 'http://123.207.32.32:8000/home/multidata' }), axios({ url: 'http://123.207.32.32:8000/home/data', params: { type: 'pop', page: 5 } })]).then(res => {
//   console.log(res);
// })
//并发分成两个返回
// axios.all([axios({ url: '/home/multidata' }), axios({ url: '/home/data', params: { type: 'pop', page: 5 } })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))
