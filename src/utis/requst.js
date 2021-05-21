import axios from 'axios';
import { Notification } from 'element-ui';
import Vue from 'vue';
Vue.prototype.$notify = Notification;
//import router from './router'

let loading        //定义loading变量
let baseURL = 'http://172.168.0.135:8089/'
function startLoading() {    //使用Element loading-start 方法

}
function endLoading() {    //使用Element loading-close 方法
 
}
axios.create({
   // baseURL: baseURL, //请求的域名，基本地址
    timeout: 5000 //请求的超时时长（ms）
})

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
   // startLoading()
    // if (localStorage.Token)
    //     config.headers.token = localStorage.Token
    //     return  config
    // 测试

    return  config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
   //endLoading()
   
    return response
}, error => {

console.log(error)

console.log("这里是统一返回的错误")
     console.log(error)
    return Promise.reject(error)
})

export default axios