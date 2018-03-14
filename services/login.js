import axios from '../utils/request'
import { URI_LOGIN, URI_DETAIL } from './contants'

export async function login (params) {
  return axios.get(URI_LOGIN)
}
export async function queryJobDetail (params) {
  return axios.get(`${URI_DETAIL}?id=${params}`)
}
