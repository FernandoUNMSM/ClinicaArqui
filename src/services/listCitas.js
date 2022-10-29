import {API_URL} from './API_KEYS.js'

function listCitas() {
  const iduser = JSON.parse(sessionStorage.getItem('usuario')).id
  return fetch(`${API_URL}/citasUser/${iduser}`)
    .then(res => res.json())
    .then(res => res);
}
export default listCitas