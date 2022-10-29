import {API_URL} from './API_KEYS.js'

function createPaciente(json) {
  return fetch(`${API_URL}/crearPaciente`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  .then(res => res.json())
  .then(res => res);
}
export default createPaciente