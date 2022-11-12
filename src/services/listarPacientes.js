import {API_URL} from './API_KEYS.js'

function getPacientes() {
  // const iddoc = JSON.parse(localStorage.getItem('usuario')).id
  return fetch(`${API_URL}/listarPacientes`)
    .then(res => res.json())
    .then(res => res.pacientes);
}
export default getPacientes