import axios from 'axios'

const service = axios.create({
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = '123'
    token && (config.headers.Authorization = token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (error) => {
    const { response } = error
    if (!response) {
      if (!window.navigator.onLine) {
        alert('网络断开，请重新连接')
      }
    } else if (error.response.status) {
      switch (error.response.status) {
        case 401:
          alert('登录失效')
          break

        default:
          alert(error.response.data.message)
          break
      }
    }
  }
)

export default service
