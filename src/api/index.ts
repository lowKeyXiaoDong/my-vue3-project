import request from '../utils/request'
import axios from 'axios'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export function getInfo() {
  return request
    .get('/api/users/info', {
      cancelToken: source.token
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
      } else {
        // handle error
      }
    })
}

source.cancel('Operation canceled by the user.')
