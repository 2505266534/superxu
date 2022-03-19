export default {
    state:{
      name:'123',
      count:0
    },
    getters:{
      moder1(state){
        return state.name+'111'
      },
      moder2(state,getters){
        return getters.moder1+'2222'
      },
      moder3(state,getters){
      return getters.moder2+'333'
      },
      moder4(state,getters,rootState){
        return getters.moder3 + rootState.counter
      }
      
    },
    actions:{
      // gaibia(context,payload){
      //    setTimeout(()=>{
      //      context.commit('gaibias',payload)
      //    },1000)
      // }
     gaibia({state,commit,rootState},payload){
       console.log(state.count,rootState.counter);
       if((state.count + rootState.counter) %2 === 1){
         commit('gaibias')
       }else {
        commit('gaibias',payload)
       }
        
      }
      
    },
    mutations:{
      moders(state){
        state.name = '456'
      },
      gaibias(state,name){
        state.name = name
      }
    }
  }