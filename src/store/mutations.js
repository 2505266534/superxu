export const  ITEMOUT = 'increment';
export const  ITEMOUTS = 'increment510';
export const  MAXD = 'listclicksa';
export const  MAXDs = 'maxage';

export default  {
    [ITEMOUT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increment5(state, count) {
      state.counter += count
    },
    [ITEMOUTS](state) {
      state.counter += 10
    },
    listclicks(state,res){
     state.students.push(res)
    },
  }