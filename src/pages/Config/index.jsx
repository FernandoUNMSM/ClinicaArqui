import React from 'react'
import { ConfigContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLanguage, faFont, faHome } from '@fortawesome/free-solid-svg-icons'

import Context from '../../context/languageContext';
import { useContext } from 'react';

import ChangeFont from '../../components/changeFont';
import { useState, useEffect } from 'react';
import setFont2 from '../../services/setFont';

export default function Config({ cambiarFont }) {
  const { language, setLanguage, texts } = useContext(Context)
  const [change, setChange] = useState(false)

  const cambiarIdioma = (evt) => {
    setLanguage(prev => (prev === 'es') ? 'en' : 'es')
  }
  const changeFontc = (evt) => {
    setChange(true)
  }

  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  useEffect(()=> {
    if(font !== null) {
      setFont2(font)
    }
  },[])

  return (<>
    {
      (change)
        ? <ChangeFont setChange={setChange} cambiarFont={cambiarFont}/>
        : null
    }
    <ConfigContainer>
      <div className="titleContainer">
        <h1>{texts[language].Configuraciones}</h1>
      </div>
      <div className="container">
        <div className="configItem" onClick={cambiarIdioma}>
          <FontAwesomeIcon icon={faLanguage} className='icon' />
          <p>{texts[language].CambiarIdioma}</p>
        </div>
        <div className="configItem" onClick={changeFontc}>
          <FontAwesomeIcon icon={faFont} className='icon' />
          <p>{texts[language].CambiarFuente}</p>
        </div>
      </div>
    </ConfigContainer>
  </>)
}