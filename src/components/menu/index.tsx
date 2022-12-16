import { useState, useEffect, useRef, useContext } from 'react'
import { MenuContainer, MenuSection, IconOpen } from './styles'
import MenuItem from './menuItem'
import { HiOutlineMenu } from 'react-icons/hi'
import { TbReportSearch } from 'react-icons/tb'
import { GiBackwardTime } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import UserContext from './../../context/userContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserDoctor, faMaskFace } from '@fortawesome/free-solid-svg-icons'

export default function MenuClinica({ status = true }: any) {
  const [menuOpen, setMenuOpen] = useState(status)
  const { userInfo } = useContext(UserContext)
  const ref: React.RefObject<any> = useRef(null)

  const handleClickOutside = (event: any) => {
    const className = event.target.classList.value
    if (menuOpen && ref.current && !ref.current.contains(event.target) && className !== 'clickable' && window.innerWidth <= 700) {
      setMenuOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, open]);//eslint-disable-line

  return (<>
    <MenuContainer status={menuOpen}>
      <ul ref={ref}>
        <li>
          <div className="menuManage">
            <Link to='dashboard'>
              <img src="https://www.clipartmax.com/png/small/2-21295_hospital-clip-art-logotipo-de-un-hospital.png" alt="logo" />
            </Link>
            <HiOutlineMenu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </li>
        {
          (userInfo && userInfo?.tipoUsuario === 2) &&
          <MenuSection>
            <li className='heading'>
              <h2>GESTION CLINICA</h2>
            </li>
            <MenuItem title='Pacientes' icon={<FontAwesomeIcon icon={faMaskFace} />} to='administrador/pacientes' />
            <MenuItem title='Doctores' icon={<FontAwesomeIcon icon={faUserDoctor} />} to='administrador/doctores' />
          </MenuSection>
        }
        <MenuSection>
          <li className='heading'>
            <h2>MODULO CITAS</h2>
          </li>
          {
            (userInfo && userInfo?.tipoUsuario === 2) &&
            <MenuItem title='Citas' icon={<TbReportSearch />} to='administrador/citas' />
          }
          {
            (userInfo && userInfo?.tipoUsuario === 0) && <>
              <MenuItem title='Citas Pendientes' icon={<TbReportSearch />} to='paciente/citas' />
              <MenuItem title='Citas Concluidas' icon={<GiBackwardTime />} to='paciente/citas_concluidas' />
            </>
          }
          {
            (userInfo && userInfo?.tipoUsuario === 1) &&
            <MenuItem title='Citas' icon={<TbReportSearch />} to='doctor/citas' />
          }
        </MenuSection>
      </ul>
    </MenuContainer>
    <IconOpen onClick={() => setMenuOpen(!menuOpen)}>
      <HiOutlineMenu />
    </IconOpen>
  </>)
}