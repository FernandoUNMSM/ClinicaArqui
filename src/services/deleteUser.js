import {API_URL} from './API_KEYS.js'

function deleteUser(id) {
  return fetch(`${API_URL}/deleteuser/${id}`)
    .then(res => res.json())
    .then(res => console.log(res));
}
export default deleteUser