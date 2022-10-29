import {API_URL} from './API_KEYS.js'

function deleteCama(id) {
  return fetch(`${API_URL}/deletecama/${id}`)
    .then(res => res.json())
    .then(res => console.log(res));
}
export default deleteCama