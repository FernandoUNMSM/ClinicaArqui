import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { HiOutlineMenu } from 'react-icons/hi'
import { ContainerWorkspace, Header } from './styles'

import MenuClinica from 'components/menu'
import Profile from 'components/profile'
import ThemeModal from 'components/options/themeModal'

export default function Workspace({ }) {

  return (<>
    <ContainerWorkspace>
      <MenuClinica />
      <div className="container">
        <Header>
          <ThemeModal/>
          <Profile />
        </Header>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </ContainerWorkspace>
  </>)
}
