import { getToken } from '@/utils/auth'
import Axios from '../interceptors'
export function login (params) {
  return Axios({
    url: '',
    method: 'GET',
    params: params
  })
}
export function logout (params) {
  return Axios({
    url: '',
    method: 'GET',
    params: params
  })
}
export function getInfo (params) {
  return Axios({
    url: '',
    method: 'GET',
    params: params
  })
}
