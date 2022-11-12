import React from 'react'
import './errormodal.css'

export default function Errormodal({ setErrorM, message, type }) {
  const cerrarModal = () => {
    setErrorM(false)
    // return (type === 'confirmCita') ? history.push('/ClinicaPaciente/Consultas') : null
  }

  return (
    <>
      <div className="grayContainer error">
        <div className="errorContainer">
          <div className="equiserror">
            {
              (type === 'confirmCita')
              ?<div className="check">
                <div className="check1"></div>
              </div>
              :<div className="equis">
                <div className="equis1"></div>
                <div className="equis2"></div>
              </div>
            }
          </div>
            <h1>{message}</h1>
            <button onClick={cerrarModal} className="errorbutton">Aceptar</button>
        </div>
      </div>
    </>
  )
}