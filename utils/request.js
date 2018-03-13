import axios from 'axios'

const _api = axios.create({
  baseURL: 'http://localhost:6100',
  timeout: 1000
})

// Add a request interceptor
_api.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log(config, 'dd')
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
  return Promise.reject(error)
})

export default _api
