import {API_URL} from './API_KEYS.js'

function getDoctores({especialidad, turno}) {
  // const iddoc = JSON.parse(localStorage.getItem('usuario')).id
  return fetch(`${API_URL}/listarDoctores/${especialidad.value}/${turno.value}`)
    .then(res => res.json())
    .then(res => res.doctores);
}
export default getDoctores