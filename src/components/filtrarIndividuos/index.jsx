import React, { useState, useRef, useEffect, useContext } from 'react'
import { Container, RadioContainer, RadioInfo, SubContainer, FiltrarItem } from './styles'

import Context from '../../context/languageContext';
export default function FiltrarIndividuos({ pacientesTotal, setPacientes }) {
  const [filterItem, setFilterItem] = useState('nombre')
  const radio = document.querySelectorAll("input[type='radio']")
  const filter = useRef()
  const { language, setLanguage, texts } = useContext(Context)

  useEffect(() => {
    if (radio.length > 0) {
      radio.forEach(rad => rad.addEventListener('click', () => {
        filter.current.value= ''
        setPacientes(pacientesTotal)
        setFilterItem(rad.id)
      }))
    }
  }, [radio])

  const actualizarArray = (evt) => {
    evt.target.value = evt.target.value.toUpperCase()
    let pac = pacientesTotal.filter(paciente => paciente[filterItem].includes(evt.target.value))
    setPacientes(pac)
  }

  return (<>
    <Container>
      <FiltrarItem>
        <SubContainer>
          <RadioContainer>
            <input type="radio" name="filter" id="dni" />
            <RadioInfo className='dni'>
              <p>DNI</p>
            </RadioInfo>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" name="filter" id="nombre" defaultChecked='checked' />
            <RadioInfo className='nombre'>
              <p>{texts[language].Nombre}</p>
            </RadioInfo>
          </RadioContainer>
        </SubContainer>
        <input type="text" onChange={actualizarArray} placeholder={`Filtrar por ${filterItem}`} ref={filter} />
      </FiltrarItem>
    </Container>
  </>)
}