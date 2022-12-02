import { useState } from 'react'
import SelectModal from "components/modal/selectModal";
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function SelectIcon({ icon, setValue, toUp = false }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const baseUrl = import.meta.env.VITE_API_URL.slice(0, -4)

  const selectValue = (index: number, e: any) => {
    const urlIcon = e.target.src.replace(baseUrl, '')
    setValue({url: urlIcon, id: index})
    setIsOpen(false)
  }

  return (<>
    <SelectModal
      buttonElement={<div className='buttonSelectInput' onClick={() => setIsOpen(true)}>
        {
          icon?.id
            ? <img src={`${baseUrl}${icon.url}`} alt="" width='30px' />
            : <p>Select an icon</p>
        }
        <MdKeyboardArrowDown />
      </div>}
      buttonWidth='100%'
      width='100%'
      toUp={toUp}
    >
      <div className="optionItem" onClick={() => {
        setValue(null)
        setIsOpen(false)
      }}>
        <p>Select an Icon</p>
      </div>
      <div className="icon-selector">
        <img src={`${baseUrl}/storage/icons/car.png`} alt="car" onClick={(e) => selectValue(1, e)} />
        <img src={`${baseUrl}/storage/icons/computer.png`} alt="computer" onClick={(e) => selectValue(2, e)} />
        <img src={`${baseUrl}/storage/icons/phone.png`} alt="phone" onClick={(e) => selectValue(3, e)} />
        <img src={`${baseUrl}/storage/icons/es.png`} alt="spanish" onClick={(e) => selectValue(4, e)} />
        <img src={`${baseUrl}/storage/icons/en.png`} alt="english" onClick={(e) => selectValue(5, e)} />
        <img src={`${baseUrl}/storage/icons/dual.png`} alt="dual" onClick={(e) => selectValue(6, e)} />
        <img src={`${baseUrl}/storage/icons/default.png`} alt="default" onClick={(e) => selectValue(7, e)} />
      </div>
    </SelectModal>
  </>)
}