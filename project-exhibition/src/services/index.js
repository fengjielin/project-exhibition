import axios from 'axios'

function instance(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res;
  }, err => {
    return {
      status: err.response.status,
      msg: err.message
    }
  })

  // 2. 发送真正的网络请求
  return instance(config)
}

function request(url, params, method) {
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求 params字段
    if (method == 'get' || method == 'put'|| method == 'delete') data = { params }
    // post请求 data字段
    if (method == 'post') data = { data: params }
    instance({
      url,
      method,
      ...data
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      console.log(err);
    })
  })
}

// 封装GET请求
function get(url, params) {
  return request(url, params, 'get')
}
// 封装POST请求
function post(url, params) {
  return request(url, params, 'post')
}
// 封装PUT请求
function put(url, params) {
  return request(url, params, 'put')
}
// 封装DELETE请求
function del(url, params) {
  return request(url, params, 'delete')
}

export default {
  get, post, put, del
}