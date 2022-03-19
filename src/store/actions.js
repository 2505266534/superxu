import {MAXD}  from './mutations'
export default {
    [MAXD](context,payload){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       
          context.commit('listclicks',payload)
          console.log(payload);
          resolve('1111')
        },1000)
       })
    }
  }