import React, { useState, useEffect, useContext } from 'react'
import { ConfirmContainer, ConfirmSubContainer, ConfirmTitle, ConfirmDates, ConfirmButton, ConfirmItem } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCloudMoon, faTag, faUserMd } from '@fortawesome/free-solid-svg-icons'
import createCita from 'services/createCita'
import setFont2 from 'services/setFont';
import Errormodal from 'components/errormodal/errormodal'
import Loader from 'components/loader'
import Context from '../../context/languageContext';

export default function Comfirm({ especialidad, horario, turno, doctor }) {
  const [errorModal, setErrorM] = useState(false)
  const [loading, setLoading] = useState(false)
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  const { language, setLanguage, texts } = useContext(Context)
  useEffect(() => {
    if (font !== null) {
      setFont2(font, size)
    }
  }, [])

  const enviarForm = () => {
    setLoading(true)
    const iduser = JSON.parse(sessionStorage.getItem('usuario')).id
    createCita({
      idPaciente: iduser,
      especialidad,
      fecha: horario.fecha,
      turno,
      idDoctor: doctor.id
    }).then(res => {
      setLoading(false)
      setErrorM(true)
    })
    // setErrorM(true)
  }

  return (<>
    {(loading) ? <Loader /> : null}
    {
      (errorModal)
        ? <Errormodal setErrorM={setErrorM} message='La cita se creo exitosamente' type='confirmCita' />
        : null
    }
    <ConfirmContainer>
      <ConfirmSubContainer>
        <ConfirmTitle>
          <h1>Confirmar Cita</h1>
        </ConfirmTitle>
        <ConfirmDates>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faTag} className='icon' />
              <p>{texts[language].Especialidad}</p>
            </div>
            <div className="right">
              <p>{especialidad}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
              <p>{texts[language].Fecha}</p>
            </div>
            <div className="right">
              <p>{horario.fecha}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faCloudMoon} className='icon' />
              <p>{texts[language].Turno}</p>
            </div>
            <div className="right">
              <p>{turno}</p>
            </div>
          </ConfirmItem>
          <ConfirmItem>
            <div className="left">
              <FontAwesomeIcon icon={faUserMd} className='icon' />
              <p>Doctor</p>
            </div>
            <div className="right">
              <p>{doctor.name}</p>
            </div>
          </ConfirmItem>
        </ConfirmDates>
        <ConfirmButton>
          <button onClick={enviarForm}>{texts[language].Enviar}</button>
        </ConfirmButton>
      </ConfirmSubContainer>
    </ConfirmContainer>
  </>)
}