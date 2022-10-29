import { API_URL } from './API_KEYS.js'
// import {Link, useHistory} from 'react-router-dom'

function sendLogin(json) {
  let path = '';
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json),
  })
    .then(res => res.json())
    .then(res => {
      (res.valid) ? sessionStorage.setItem('usuario', JSON.stringify(res.user)) : null;
      (res.valid) ? sessionStorage.setItem('familiares', JSON.stringify(res.familiares)) : null

      if (res.user.tipoUsuario === 'doctor') {
        path = '/ClinicaDoctor'
      }
      else if (res.user.tipoUsuario === 'paciente') {
        path = '/ClinicaPaciente'
      }
      else if (res.user.tipoUsuario === 'administrador') {
        path = '/ClinicaAdministrador'
      }
      return {
        valid: res.valid,
        message: res.message,
        path
      }
    });
}
export default sendLogin