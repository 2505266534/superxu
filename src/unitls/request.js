import axios from 'axios'
export function request(config) {
    //1.创建实列
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //2.请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return err
    })
    //3.响应拦截
    instance.interceptors.response.use(response => {
        return response.data
    }, err => {
        return err
    })
    return instance(config)
}