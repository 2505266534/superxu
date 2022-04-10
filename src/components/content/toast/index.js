import Toast from './Toast'
const obj = {}
obj.install = function(Vue){
    // document.body.appendChild(toast,$el)
    const toastContrustor = Vue.extend(Toast)
    const toast  = new toastContrustor()
    toast.$mount(document.createElement('div'))
    // console.log(toast,$el);
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
    // console.log(123,Vue);
}
export default obj