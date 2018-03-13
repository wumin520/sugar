import axios from '../utils/request'
import { URI_LOGIN } from './contants'

export async function login (params) {
  return axios.get(URI_LOGIN)
}
