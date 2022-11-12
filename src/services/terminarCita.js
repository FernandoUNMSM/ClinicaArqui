import {API_URL} from './API_KEYS.js'

function terminarCita({id}) {
  console.log(id)

  // const iddoc = JSON.parse(localStorage.getItem('usuario')).id
  return fetch(`${API_URL}/terminarCita/${id}`)
    .then(res => res.json())
    .then(res => res.citas);
}
export default terminarCita