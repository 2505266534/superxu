import {MAXDs,}  from './mutations'
export default {
    [MAXDs](state) {
      return state.students.filter(function (n) {
        return n.age > 20
      })
    },
    maxage2(state) {
      return state.students.filter(n => n.age >= 21)
    },
    maxage3(state){
       return function(age){
         return state.students.filter(function(n){
           return n.age == age
         })
       }
    },
    maxage4(state){
     return id=>{
       return state.students.filter(n=>n.id==id)
     }
    },
    maxage5(state,getters){
      return getters.maxage4.length
    }
  }