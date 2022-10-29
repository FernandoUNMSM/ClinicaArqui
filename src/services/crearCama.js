import {API_URL} from './API_KEYS.js'

function createCama(json) {
  return fetch(`${API_URL}/crearCama`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  .then(res => res.json())
  .then(res => res.camas);
}
export default createCama