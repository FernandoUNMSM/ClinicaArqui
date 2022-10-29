import {API_URL} from './API_KEYS.js'

const PATHS = {
  Personal: 'editarPersonal',
  Paciente: 'editarPaciente',
  Camas: 'editarCama'
}

function changeData({data, type}) {
  return fetch(`${API_URL}/${PATHS[type]}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => res.data);
}
export default changeData