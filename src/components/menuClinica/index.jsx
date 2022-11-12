import React, { useEffect, useContext, useState, useRef } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faHome, faSignOutAlt, faCalendarAlt, faNotesMedical, faUserMd, faUserInjured, faProcedures } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context/languageContext';
import logoC from 'img/logo.png'

export default function MenuClinica({ }) {
  const tipo = JSON.parse(localStorage.getItem('usuario')).tipoUsuario
  const [path, setPath] = useState('')
  const { language, setLanguage, texts } = useContext(Context)
  const menuClinica = useRef()
  useEffect(() => {
    if (tipo === 0) {
      setPath('/clinica/paciente')
    }
    else if (tipo === 1) {
      setPath('/clinica/doctor')
    }
    else if (tipo === 2) {
      setPath('/clinica/administrador')
    }
  }, [tipo])

  const cerraSession = () => {
    localStorage.setItem('usuario', 'null')
  }

  const changeMenu = (evt) => {
    menuClinica.current.classList.toggle('small')
  }

  return (
    <>
      <div className="menu-clinica-container" ref={menuClinica}>
        <div className="logoMenu" onClick={changeMenu}>
          <figure className="logo">
            <img src={logoC} alt="logo" />
          </figure>
          <div className="logoName">
            <p>Hospital <span>FISI</span></p>
          </div>
        </div>
        <nav className="menu-clinica">
          <ul>
            <div className="up">
              <li>
                <Link to={path}>
                  <FontAwesomeIcon icon={faUserAlt} className='icon' />
                  <p>{texts[language].Perfil}</p>
                </Link>
              </li>
              {
                (tipo === 0)
                  ? <>
                    <li>
                      <Link to='/clinica/paciente/formulario'>
                        <FontAwesomeIcon icon={faNotesMedical} className='icon' />
                        <p>{texts[language].Formulario}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/clinica/paciente/citas'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>{texts[language].Consultas}</p>
                      </Link>
                    </li>
                  </>: null
              }
              {
                (tipo === 2)
                  ? <>
                    <li>
                      <Link to='/clinica/administrador/doctor'>
                        <FontAwesomeIcon icon={faUserMd} className='icon' />
                        <p>{texts[language].AdministrarPersonal}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/clinica/administrador/paciente'>
                        <FontAwesomeIcon icon={faUserInjured} className='icon' />
                        <p>{texts[language].AdministrarPacientes}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/clinica/administrador/camas'>
                        <FontAwesomeIcon icon={faProcedures} className='icon' />
                        <p>{texts[language].AdministrarCamas}</p>
                      </Link>
                    </li>
                  </>: null
              }
              {/* <li>
                <Link to='/ClinicaPaciente/Config'>
                  <FontAwesomeIcon icon={faCog} className='icon' />
                  <p>{texts[language].Configuraciones}</p>
                </Link>
              </li> */}
            </div>
            <div className="down">
              <li>
                <Link to='/' onClick={cerraSession}>
                  <FontAwesomeIcon icon={faSignOutAlt} className='icon' />
                  <p>{texts[language].Cerrar}</p>
                </Link>
              </li>
              {/* <li>
                <Link to='/'>
                  <FontAwesomeIcon icon={faHome} className='icon' />
                  <p>{texts[language].Home}</p>
                </Link>
              </li> */}
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}
