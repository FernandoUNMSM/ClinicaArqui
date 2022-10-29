import {API_URL} from './API_KEYS.js'

function getAllDoctores() {
  return fetch(`${API_URL}/listarDoctores`)
    .then(res => res.json())
    .then(res => res.doctores);
}
export default getAllDoctores