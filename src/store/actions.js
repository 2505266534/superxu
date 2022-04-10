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
    },
    addclick(context,payload){
     
      // let oldProduct = ''
      // for(let item of context.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //     oldProduct.count +=1
      //   }else {
      //     payload.count = 1
      //   context.cartList.push(payload)
      //   }
      // }
     return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item=>item.iid == payload.iid)
    
      if(oldProduct){
            context.commit('addclicks',oldProduct)
            resolve('添加成功+1')
          }else {
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit('addclickr',payload)
            resolve('添加成功')
          }
     })
    
       
     },
  }