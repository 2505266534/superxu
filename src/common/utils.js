export function debounce(func, delay) {
 //防抖函数，防止调用很多次
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
     
    }, delay)
  }
  
}
export const itemlinter = {
  data(){
    return {
      itemlister:null,
      homeitemImageLoad:'',
      refresh:null
    }
  },
  // mounted(){
  //   let refresh = debounce(this.$refs.scroll.refresh,100)
  //   this.itemlister =()=>{
  //     refresh()
  //   }
  //   this.$bus.$on('itemimgload',this.itemlister)
  //   console.log('12');
  // }
  mounted() {
     this.refresh = debounce(this.$refs.scroll.refresh,50)
    this.homeitemImageLoad = ()=>{
      this.refresh()
    }
    this.$bus.$on('itemImageLoad',this.homeitemImageLoad)
    // console.log('12');
  },
}

