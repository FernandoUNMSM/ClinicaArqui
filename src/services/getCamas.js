import {API_URL} from './API_KEYS.js'

function getCamas() {
  return fetch(`${API_URL}/listarCamas`)
    .then(res => res.json())
    .then(res => res.camas);
}
export default getCamas