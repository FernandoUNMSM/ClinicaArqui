import { useContext, useState } from 'react'

import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

import SelectModal from './../../modal/selectModal'
import ConfigContext from './../../../context/configContext'

export default function ThemeModal() {
  const { changeTheme } = useContext(ConfigContext)

  return (
    <SelectModal width='150px' buttonElement={<div className="buttonSelectOnHeader">
      <BsFillSunFill />
    </div>}>
      <div className="optionItem" onClick={() => changeTheme('light')}>
        <BsFillSunFill />
        Light
      </div>
      <div className="optionItem" onClick={() => changeTheme('dark')}>
        <BsFillMoonStarsFill />
        Dark
      </div>
    </SelectModal>
  )
}