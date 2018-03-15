import axios from '../utils/request'
import { stringify } from 'qs'
import { URI_JOB_LIST, URI_JOB_SEARCH } from './contants'

/**
 *
 * @param {*} city_id
 * @param {*} offset
 * @param {*} pagesize
 */
export async function queryJobList (params) {
  return axios(`${URI_JOB_LIST}?${stringify(params)}`)
}

export async function searchJob (params = {keywords: '', city_id: '', offset: 0, pagesize: 50}) {
  return axios(`${URI_JOB_SEARCH}?${stringify(params)}`)
}
