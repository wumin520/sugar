import axios from '../utils/request'
import { URI_CITIES } from './contants'

export async function queryCitys () {
  return axios(URI_CITIES)
}
