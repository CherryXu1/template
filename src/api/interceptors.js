import Axios from 'axios'
import store from '../store/index'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Axios.defaults.timeout = 15000
// 新建请求拦截器
Axios.interceptors.request.use(
  (config) => {
    // 让每个请求携带自定义token请根据实际情况自行修改
    config.headers.Authorization = getToken()
    config.headers['User-Source'] = 'PC_QY'
    return config
  },
  (error) => {
    return error
  }
)
// 新建响应拦截器
Axios.interceptors.response.use(
  (response) => {
    console.log(response)
  },
  (error) => {
    console.log(error)
  }
)
export default Axios
