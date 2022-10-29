import React, { useEffect, useState, useRef } from "react"
import './styles.css'
import cancerIcon from 'img/cancerIcon.png'
import cardioIcon from 'img/cardioIcon.png'
import firma from 'img/firma.png'
import ginecoIcon from 'img/ginecoIcon.png'
import logoC from 'img/logo.png'
import logoRecortado from 'img/logoRecortado.png'
import pediatriaIcon from 'img/pediatriaIcon.png'
import staff1 from 'img/staff1.jpg'
import staff2 from 'img/staff2.png'
import staff3 from 'img/staff3.png'
import staff4 from 'img/staff4.png'
import stomatchIcon from 'img/stomatchIcon.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faVirus } from '@fortawesome/free-solid-svg-icons'

function Home({ }) {
  const [user, setUser] = useState(sessionStorage.getItem('usuario'))
  const [path, setPath] = useState('/Login')
  var tipo = ''
  useEffect(() => {
    if (user === 'null' || user === null) {
    }
    else {
      ala()
    }
  }, [])
  const ala = () => {
    tipo = JSON.parse(sessionStorage.getItem('usuario')).tipoUsuario
    if (tipo === 'paciente') {
      setPath('/ClinicaPaciente')
    }
    else if (tipo === 'doctor') {
      setPath('/ClinicaDoctor')
    }
    else if (tipo === 'administrador') {
      setPath('/ClinicaAdministrador')
    }
  }

  const menuContainer = useRef()
  const menu = useRef()
  const extra = useRef()
  const logo = useRef()
  const logoContainer = useRef()
  const menuOffCanvas = useRef()

  window.onscroll = () => {
    if (window.pageYOffset > 0) {
      menuContainer.current.classList.add("menuContainer-on");
      menu.current.classList.add("menu-on");
      extra.current.classList.add("extra-on");
      logo.current.classList.add("active");
      logoContainer.current.classList.add("logo-on");
    } else {
      menuContainer.current.classList.remove("menuContainer-on");
      menu.current.classList.remove("menu-on");
      extra.current.classList.remove("extra-on");
      logo.current.classList.remove("active");
      logoContainer.current.classList.remove("logo-on");
    }
  }
  const abrirMenu = () => {
    menuOffCanvas.current.classList.toggle("menuNoVisible");
  }

  return (<>
    <div className="HomeContainer">
      <div className="menu-container" ref={menuContainer}>
        <div className="abrirMenu">
          <p>
            <FontAwesomeIcon icon={faBars} className='icon' onClick={abrirMenu} />
          </p>
        </div>
        <div className="menuExtra" id="menu" ref={menuOffCanvas}>
          <div className="cerrarMenu">
            <p>
              <FontAwesomeIcon icon={faTimes} className='icon' onClick={abrirMenu} />
            </p>
          </div>
          <div className="extra" ref={extra}>
            <div className="covid">
              <FontAwesomeIcon icon={faVirus} />
              <h1>COVID-19</h1>
            </div>
            <div className="contacto-header">
              <h1>Central de citas: <a href=""> (01) XXX XXXX</a></h1>
              <h1><Link to={(user !== 'null' && user !== null) ? path : '/Login'}>Ingresar al hospital Online</Link></h1>
            </div>
          </div>
          <div className="menu" ref={menu}>
            <nav>
              <ul>
                <li><a href="">Especialidades</a></li>
                <li><a href="">Staff Medico</a></li>
                <li><a href="">Contacto</a></li>
                <li><Link to={(user !== 'null' && user !== null) ? path : '/Login'}>Reserva tu cita</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="logo-container" ref={logoContainer}>
          <figure className="logo">
            <img src={logoC} alt="logo" ref={logo} />
          </figure>
          <div className="logoName">
            <p>Hospital <span>FISI</span></p>
          </div>
        </div>
      </div>

      {/* <!-- FIN MENU --> */}

      {/* <!-- INICIO HEADER --> */}

      <header className="header">
        <div className="header1 headers" ></div>
        <div className="header2 headers" style={{ visibility: 'hidden', opacity: 0 }}></div>
        <div className="header3 headers" style={{ visibility: 'hidden', opacity: 0 }}></div>
      </header>

      {/* <!-- FIN HEADER --> */}

      {/* <!-- INICIO ESPECIALIDADES --> */}

      <section className="especialidades-container">
        <h1>Nuestras Especialidades</h1>
        <div className="especialidades">
          <div className="especialidades-card">
            <a href="">
              <div className="subtitulo">
                <h2>Especialidad de</h2>
              </div>
              <div className="central cardiologia">
                <figure>
                  <img src={cardioIcon} alt="" />
                </figure>
                <h1>Cardiologia</h1>
              </div>
              {/* <div className="enlace">VER MÁS <fa-icon [icon]="faChevronCircleRight"></fa-icon></div> */}
            </a>
          </div>
          <div className="especialidades-card">
            <a href="">
              <div className="subtitulo">
                <h2>Especialidad de</h2>
              </div>
              <div className="central">
                <figure>
                  <img src={cancerIcon} alt="" />
                </figure>
                <h1>Oncologia</h1>
              </div>
              {/* <div className="enlace">VER MÁS <fa-icon [icon]="faChevronCircleRight"></fa-icon></div> */}
            </a>
          </div>
          <div className="especialidades-card">
            <a href="">
              <div className="subtitulo">
                <h2>Especialidad de</h2>
              </div>
              <div className="central">
                <figure>
                  <img src={stomatchIcon} alt="" />
                </figure>
                <h1>Gastroenterologia</h1>
              </div>
              {/* <div className="enlace">VER MÁS <fa-icon [icon]="faChevronCircleRight"></fa-icon></div> */}
            </a>
          </div>
          <div className="especialidades-card">
            <a href="">
              <div className="subtitulo">
                <h2>Especialidad de</h2>
              </div>
              <div className="central">
                <figure>
                  <img src={ginecoIcon} alt="" />
                </figure>
                <h1>Ginecologia</h1>
              </div>
              {/* <div className="enlace">VER MÁS <fa-icon [icon]="faChevronCircleRight"></fa-icon></div> */}
            </a>
          </div>
          <div className="especialidades-card">
            <a href="">
              <div className="subtitulo">
                <h2>Especialidad de</h2>
              </div>
              <div className="central">
                <figure>
                  <img src={pediatriaIcon} alt="" />
                </figure>
                <h1>Pediatria</h1>
              </div>
              {/* <div className="enlace">VER MÁS <fa-icon [icon]="faChevronCircleRight"></fa-icon></div> */}
            </a>
          </div>
        </div>
        <a href="">
          <div className="masEspe">
            {/* <h2>Ver mas especialidades <fa-icon [icon]="faChevronCircleRight"></fa-icon></h2> */}
          </div>
        </a>
      </section>

      {/* <!-- FIN ESPECIALIDADES --> */}

      {/* <!-- INICIO STAFF --> */}

      <section className="staff-container">
        <h1>Nuestro STAFF</h1>
        <div className="staff-group">
          <div className="responStaff">
            <a href="">
              <div className="staff">
                <div className="info">
                  <div className="arriba">
                    <h2>Oftalmologia</h2>
                  </div>
                  <div className="medio">
                    <h1>Dr. Cortez</h1>
                    <p>Dr. en Jefe de Oftalmologia</p>
                  </div>
                  <div className="abajo">
                    {/* <p>Conoce más <fa-icon [icon]="faChevronCircleRight"></fa-icon></p> */}
                  </div>
                </div>
                <figure><img src={staff1} /></figure>
              </div>
            </a>
            <a href="" >
              <div className="staff">
                <div className="info">
                  <div className="arriba">
                    <h2>Ginecologia</h2>
                  </div>
                  <div className="medio">
                    <h1>Dra. Gomez</h1>
                    <p>Dra. en Jefe de Ginecologia</p>
                  </div>
                  <div className="abajo">
                    {/* <p>Conoce más <fa-icon [icon]="faChevronCircleRight"></fa-icon></p> */}
                  </div>
                </div>
                <figure><img src={staff2} /></figure>
              </div>
            </a>
          </div>
          <div className="responStaff">
            <a href="" >
              <div className="staff">
                <div className="info">
                  <div className="arriba">
                    <h2>Dermatologia</h2>
                  </div>
                  <div className="medio">
                    <h1>Dr. Castillo</h1>
                    <p>Dr. en Jefe de Dermatologia</p>
                  </div>
                  <div className="abajo">
                    {/* <p>Conoce más <fa-icon [icon]="faChevronCircleRight"></fa-icon></p> */}
                  </div>
                </div>
                <figure><img src={staff3} /></figure>
              </div>
            </a>
            <a href="">
              <div className="staff">
                <div className="info">
                  <div className="arriba">
                    <h2>Pediatria</h2>
                  </div>
                  <div className="medio">
                    <h1>Dr. Barrenechea</h1>
                    <p>Dr. en Jefe de Pediatria</p>
                  </div>
                  <div className="abajo">
                    {/* <p>Conoce más <fa-icon [icon]="faChevronCircleRight"></fa-icon></p> */}
                  </div>
                </div>
                <figure><img src={staff4} /></figure>
              </div>
            </a>
          </div>

        </div>
        <a href="" style={{ textDecoration: 'none' }} >
          <div className="masDoc">
            {/* <h1>Conoce a todo nuestro Staff <fa-icon [icon]="faChevronCircleRight"></fa-icon></h1> */}
          </div>
        </a>
      </section>

      {/* <!-- FIN STAFF --> */}

      {/* <!-- INICIO FOOTER --> */}

      <footer className="footer-container">
        <div className="footer-main">
          <div className="footer-left">
            <img src={logo} />
            <p>&copy 2020 Clínica Montefiori</p>
          </div>
          <div className="footer-info" >
            <h2 className="footer-title">Más información</h2>
            <ul>
              <li>
                <a href="#">Acerca de nosotros</a>
              </li>
              <li>
                <a href="#">Nuestras especialidades</a>
              </li>
              <li>
                <a href="#">Nuestros staff médico</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact" >
            <h2 className="footer-title">Contáctenos</h2>
            <form action="">
              <input className="input" type="email" name="email" id="email" placeholder="Correo electrónico" />
              <input className="button" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  </>
  )
}
export default Home