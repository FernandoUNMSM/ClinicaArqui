import {API_URL} from './API_KEYS.js'

function sendRegistro(json) {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json),
  })
  .then(res => res.json())
  .then(res => {
    if (res.message === 'user created') {
      sessionStorage.setItem('usuario', JSON.stringify(res.user))
      sessionStorage.setItem('familiares', JSON.stringify([]))
      // history.push('/Clinica')
    }
    return res.message
  });
}
export default sendRegistro