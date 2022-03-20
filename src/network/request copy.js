import axios from 'axios'
import { install } from 'vuex'
//简单便捷
export function request(config){
    // 1.创建实列
    const install = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    // 2.请求拦截器
    // install.interceptors.request.use(config=>{
    //     console.log(config);
    //   return config
    // },err=>{
    //   return err
    // })
    install.interceptors.request.use(
        config=>config,
        error=>Promise.reject(error)
    )
    // 2.2响应拦截
    install.interceptors.response.use(res=>{
      return res.data
        // console.log(res.data);
    },err=>{
        return err
    })
    
    // 3.发送真正的网络请求
    return install(config)
}
//这些都不是最好的方法
// export function request(config) {
//   return  new Promise((resolve, reject) => {
//         const instance = axios.create({
//             baseURL: "http://123.207.32.32:8000",
//             timeout: 5000
//         })
//         instance(config)
//             .then(res => {
//                 resolve(res);
//             })
//             .catch(err => {
//                 reject(err);
//             })
//     })

// }







// export function request(config){
//   const stance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:8000
//   })
//   stance(config.baseConfig)
//   .then(res=>{
//     config.success(res)
//   })
//   .catch(err=>{
//     config.failure(err)
//   })
// }

export function request1(config) {
    const stance = axios.create({
        // http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 8000
    })
    stance(config.baseConfig)
        .then(res => {
            config.success(res)
        })
        .catch(err => {
            config.failure(err)
        })
}




//1.回调success，failure。
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }
