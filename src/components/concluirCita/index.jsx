import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Container, ConfirmContainer } from './styles'
import terminarCita from 'services/terminarCita'

import Context from '../../context/languageContext';
export default function ConcluirCita({ setConfirm, setCitas, id}) {
  const { language, setLanguage, texts } = useContext(Context)
  const cerrar = () => {
    setCitas((prev) => prev.filter(el => el.idCita !== id))
    terminarCita({ id }).then(res => {
      setConfirm(false)
    })
  }

  return (<>
    <Container>
      <ConfirmContainer>
        <div className="signo">
          <FontAwesomeIcon icon={faExclamationTriangle} className='icon' />
        </div>
        <div className="texto">
          <h1>{texts[language].ConcludeCita}</h1>
        </div>
        <div className="buttons">
          <button onClick={cerrar}>{texts[language].Concluir}</button>
          <button onClick={() => setConfirm(false)}>{texts[language].Cancelar}</button>
        </div>
      </ConfirmContainer>
    </Container>
  </>)
}