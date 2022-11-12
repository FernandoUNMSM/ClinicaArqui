import { API_URL } from './API_KEYS.js'

function sendLogin(json) {
  return fetch(`${API_URL}/auth`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json),
  })
    .then(res => res.json())
    .then(res => {
      if (!res.success) return {
        valid: res.success,
        message: res.err || null
      }
      localStorage.setItem('usuario', JSON.stringify(res.data))
      return {
        valid: res.success
      }
    }).catch(err => {
      return {
        valid: false,
        message: err || null
      }
    })
}
export default sendLogin