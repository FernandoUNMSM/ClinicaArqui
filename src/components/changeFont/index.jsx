import React, { useRef, useEffect } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import setFont2 from '../../services/setFont';
import { useState } from 'react';
export default function ChangeFont({ setChange, cambiarFont }) {
  const fontSize = useRef(null)
  const fontColor = useRef(null)
  const fontFamily = useRef(null)
  const [reset, setReset] = useState('ss')

  const nose = (evt) => {
    evt.preventDefault()
    cambiarFont(fontFamily.current.value)
    localStorage.setItem('fontFamily', fontFamily.current.value)
    // localStorage.setItem('fontSize', fontSize.current.value)
    setFont2(fontFamily.current.value)
    // cambiarFont(fontFamily.current.value)
  }
  const resetSize = () => {
    localStorage.removeItem('fontSize')
  }
  const resetFamily = () => {
    setFont2('Open Sans, sans-serif')
    localStorage.removeItem('fontFamily')
  }

  return (<>
    <div className="formatoContainer">
      <div className="subContainerFont">
        <div className="containerRes">
          <div className="formatoTitulo">
            <h1>Cambiar tipo de Fuente</h1>
            <FontAwesomeIcon icon={faTimes} onClick={() => setChange(false)} className='icon' />
          </div>
          <form action="" id="formato" onSubmit={nose}>
            {/* <div className="formatoItem formato1">
              <div className="item">
                <p>Font Size</p>
                <p className="formatoP">Tamaño de fuente del editor</p>
                <input type="number" name="" id="" min="1" max="30" pattern="^[0-9]+" ref={fontSize}/>
              </div>
              <button type='button' onClick={resetSize}>reset</button>
            </div> */}
            <div className="formatoItem formato3">
              <div className="item">
                <p>Font Family</p>
                <p className="formatoP">Tipo de fuente del editor</p>
                <input type="text" name="font" id="" ref={fontFamily} />
              </div>
              <button type='button' onClick={resetFamily}>reset</button>
            </div>
          </form>
        </div>
        <div className="buttonF">
          <button form="formato">Aplicar</button>
        </div>
      </div>
    </div>
  </>)
}



