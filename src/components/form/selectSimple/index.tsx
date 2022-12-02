import { useState, useEffect } from 'react'
import SelectModal from "components/modal/selectModal";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { LabelError } from '../input/styles';

export default function SelectSimple({ selectText = 'Select', data, value, setValue, toUp = false, error = false }: any) {
  const [isOpen, setIsOpen] = useState(false)

  const selectValue = (value: any) => {
    setValue(value)
    setIsOpen(false)
  }

  return (<>
    <SelectModal
      buttonElement={<div className={`buttonSelectInput${error ? ' withError' : ''}`} onClick={() => setIsOpen(true)}>
        <p>
          {data.find((item: any) => item.value.toString() === value.toString())?.name || selectText}
        </p>
        <MdKeyboardArrowDown />
      </div>}
      buttonWidth='100%'
      width='100%'
      toUp={toUp}
    >
      {
        [{ name: selectText, value: 'Select' }]
          .concat(data).map((item: any, index: number) =>
            <div
              className="optionItem"
              onClick={() => selectValue(item.value)}
              key={index}
            >
              {item.name}
            </div>
          )}
    </SelectModal>
    {error &&
      <LabelError>{error.message}</LabelError>
    }
  </>)
}