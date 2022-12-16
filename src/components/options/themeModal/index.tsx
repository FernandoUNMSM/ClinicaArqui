import { useContext, useState } from 'react'

import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

import SelectModal from 'components/modal/selectModal'
import ConfigContext from 'context/configContext'

export default function ThemeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { changeTheme } = useContext(ConfigContext)

  return (
    <SelectModal width='150px' buttonElement={<div className="buttonSelectOnHeader" onClick={() => setIsOpen(true)}>
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