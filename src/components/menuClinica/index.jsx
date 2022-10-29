import React, { useEffect, useContext, useState, useRef } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faCog, faHome, faSignOutAlt, faCalendarAlt, faNotesMedical, faUserMd, faUserInjured, faProcedures } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context/languageContext';
import logoC from 'img/logo.png'

export default function MenuClinica({ }) {
  const tipo = JSON.parse(sessionStorage.getItem('usuario')).tipoUsuario
  const [path, setPath] = useState('')
  const { language, setLanguage, texts } = useContext(Context)
  const menuClinica = useRef()

  useEffect(() => {
    if (tipo === 'paciente') {
      setPath('/ClinicaPaciente')
    }
    else if (tipo === 'doctor') {
      setPath('/ClinicaDoctor')
    }
    else if (tipo === 'administrador') {
      setPath('/ClinicaAdministrador')
    }
  }, [tipo])

  const cerraSession = () => {
    sessionStorage.setItem('usuario', 'null')
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
                (tipo === 'paciente')
                  ? <>
                    <li>
                      <Link to='/ClinicaPaciente/Formulario'>
                        <FontAwesomeIcon icon={faNotesMedical} className='icon' />
                        <p>{texts[language].Formulario}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/ClinicaPaciente/Consultas'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                        <p>{texts[language].Consultas}</p>
                      </Link>
                    </li>
                  </>: null
              }
              {
                (tipo === 'administrador')
                  ? <>
                    <li>
                      <Link to='/ClinicaAdministrador/AdministrarPersonal'>
                        <FontAwesomeIcon icon={faUserMd} className='icon' />
                        <p>{texts[language].AdministrarPersonal}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/ClinicaAdministrador/AdministrarPacientes'>
                        <FontAwesomeIcon icon={faUserInjured} className='icon' />
                        <p>{texts[language].AdministrarPacientes}</p>
                      </Link>
                    </li>
                    <li>
                      <Link to='/ClinicaAdministrador/AdministrarCamas'>
                        <FontAwesomeIcon icon={faProcedures} className='icon' />
                        <p>{texts[language].AdministrarCamas}</p>
                      </Link>
                    </li>
                  </>: null
              }
              <li>
                <Link to='/ClinicaPaciente/Config'>
                  <FontAwesomeIcon icon={faCog} className='icon' />
                  <p>{texts[language].Configuraciones}</p>
                </Link>
              </li>
            </div>
            <div className="down">
              <li>
                <Link to='/' onClick={cerraSession}>
                  <FontAwesomeIcon icon={faSignOutAlt} className='icon' />
                  <p>{texts[language].Cerrar}</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FontAwesomeIcon icon={faHome} className='icon' />
                  <p>{texts[language].Home}</p>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  )
}
