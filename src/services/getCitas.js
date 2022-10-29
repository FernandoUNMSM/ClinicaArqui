import {API_URL} from './API_KEYS.js'

function getCitas() {
  const iddoc = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/citaDoctor/${iddoc}`)
    .then(res => res.json())
    .then(res => res.citas);
}
export default getCitas