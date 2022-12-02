import { useState, useEffect } from "react";
import { NavLink as NavLinkReactRouter, useLocation } from "react-router-dom";
import { ContainerMenuItem, ItemTitle, SubMenu } from "./styles";
import { IoIosArrowBack } from 'react-icons/io'
import { GoPrimitiveDot } from 'react-icons/go'

const NavLink = ({ to, children }: any) => {
  return <NavLinkReactRouter
    to={to}
    className={({ isActive }) => isActive ? 'link-active' : undefined}
  >
    {children}
  </NavLinkReactRouter>
}

export default function MenuItem({ title, icon, to, subMenuActual = '', setSubMenuActual = () => { }, children }: any) {
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    if(subMenuActual !== title){
      setSubMenuOpen(false)
    }
  }, [subMenuActual])

  return (<>
    <ContainerMenuItem>
      {
        children ?
          <>
            <ItemTitle
              onClick={() => {
                setSubMenuOpen(!subMenuOpen)
                setSubMenuActual(title)
              }}
              status={(pathname.split('/')[4] === title.toLowerCase().split(' ').join('_')) ? true : false}
              statusSubmenu={subMenuOpen}
            >
              <p>
                <span className="title-icon">{icon}</span>
                <span className="title-name">{title}</span>
              </p>
              <div className="arrow">
                <IoIosArrowBack />
              </div>
            </ItemTitle>
            <SubMenu status={subMenuOpen} items={children.length || 1}>
              {children}
            </SubMenu>
          </>
          :
          <li className="item-link">
            <NavLink to={to}>
              <p>
                <span className="title-icon">{icon || <GoPrimitiveDot />}</span>
                <span className="title-name">{title}</span>
              </p>
            </NavLink>
          </li>
      }
    </ContainerMenuItem>
  </>)
}