import {API_URL} from './API_KEYS.js'

function createCita(json) {
  // console.log(json)
  return fetch(`${API_URL}/createCita`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json),
  })
  .then(res => res.json())
  .then(res => console.log(res));
}
export default createCita