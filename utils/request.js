import axios from 'axios'

const _api = axios.create({
  baseURL: process.env.BACKEND || 'http://fp02.ops.gaoshou.me:5021',
  timeout: 10000
})

console.log('BACKEND: ', process.env.BACKEND)

// Add a request interceptor
_api.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
_api.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error.response && error.response.data)
})

export default _api
