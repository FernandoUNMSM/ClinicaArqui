import {API_URL} from './API_KEYS.js'

function sendRegistro(json) {
  return fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json),
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    // if (res === 'USUARIO REGISTRADO') {
    //   history.push('/login')
    // }else{

    // }
  });
}
export default sendRegistro