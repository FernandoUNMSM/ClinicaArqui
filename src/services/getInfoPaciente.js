import {API_URL} from './API_KEYS.js'

function getInfoPaciente(dni) {
  return fetch(`${API_URL}/infoPaciente/${dni}`)
    .then(res => res.json())
    .then(res => res);
}
export default getInfoPaciente