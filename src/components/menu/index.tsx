import { useState, useEffect, useRef } from "react";
import { MenuContainer, MenuSection, IconOpen } from "./styles";
import MenuItem from "components/menu/menuItem";
import { AiOutlineHome, AiOutlineTag, AiOutlineKey } from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'
import { FaUserAlt, FaUsers, FaLayerGroup } from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineMessage } from 'react-icons/md'
import { TbReportSearch } from 'react-icons/tb'
import { IoCodeSlashOutline, IoLanguage } from 'react-icons/io5'
import { GiBackwardTime } from 'react-icons/gi'
import { Link } from "react-router-dom";
import { BiPlusMedical } from 'react-icons/bi'

export default function MenuWorkspace({ }: any) {
  const [menuOpen, setMenuOpen] = useState(true)
  const [subMenuActual, setSubMenuActual] = useState('')
  const ref: React.RefObject<any> = useRef(null);

  const handleClickOutside = (event: any) => {
    const className = event.target.classList.value;
    if (menuOpen && ref.current && !ref.current.contains(event.target) && className !== 'clickable' && window.innerWidth <= 700) {
      setMenuOpen(false)
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open]);//eslint-disable-line

  return (<>
    <MenuContainer status={menuOpen}>
      <ul ref={ref}>
        <li>
          <div className="menuManage">
            <Link to='dashboard'>
              <img src="https://www.freewaylms.com/admin/admin-assets/images/header/logo-lms-white.png" alt="logo" />
            </Link>
            <HiOutlineMenu onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </li>
        {/* <MenuSection>
          <li className='heading'>
            <h2>DASHBOARD</h2>
          </li>
          <MenuItem title='Dashboard' icon={<AiOutlineHome />} to='heimdall/dashboard' />
        </MenuSection> */}
        <MenuSection>
          <li className='heading'>
            <h2>GESTION CLINICA</h2>
          </li>
          <MenuItem title='Pacientes' icon={<FaUserAlt />} to='administrador/pacientes' />
          <MenuItem title='Doctores' icon={<AiOutlineTag />} to='administrador/doctores' />
          {/* <MenuItem title='Permissions' icon={<FaUserAlt />} to='heimdall/security_accounts/permissions' /> */}
        </MenuSection>
        {/* <MenuSection>
          <li className='heading'>
            <h2>MODULO CITAS</h2>
          </li>
          <MenuItem title='Citas' icon={<FaUserAlt />} to='heimdall/security_accounts/users' />
        </MenuSection> */}
      </ul>
    </MenuContainer>
    <IconOpen onClick={() => setMenuOpen(!menuOpen)}>
      <HiOutlineMenu />
    </IconOpen>
  </>)
}