import React, { useState, useEffect, useRef } from 'react'

import SelectModal from 'components/modal/selectModal'
import { IoMdArrowDropdown } from 'react-icons/io'
import { InputSimple } from '../input'
import { SelectTagInputContainer } from './styles'
import { IoMdClose } from 'react-icons/io'
import { LabelError } from '../input/styles'

function SelectTagInput({ actualValues, totalValues, title, keyword, setValue = () => { }, error = false, toUp = false, required = false, disabled = false, uppercase = false }: any) {
  const [selectValues, setSelectValues] = useState(totalValues)
  const [selectActualValues, setActualSelectValues] = useState(actualValues || [])
  const input: any = useRef(null)

  const searchValue = (e: any) => {
    const value = e.target.value.toLowerCase()
    setSelectValues(totalValues.filter((item: any) => item[keyword].toLowerCase().includes(value)))
  }
  const handleValue = (value: any, e: any) => {
    e.preventDefault()
    if (selectActualValues.some(((item: any) => item[keyword] === value[keyword]))) {
      deleteValue(value)
    } else {
      setValue(selectActualValues.concat(value))
      setActualSelectValues(selectActualValues.concat(value))
    }

    input.current.value = ''
    setSelectValues(totalValues)
    input.current.focus()
  }
  const deleteValue = (valueToDelete: any) => {
    setActualSelectValues(selectActualValues.filter((value: any) => value[keyword] !== valueToDelete[keyword]))
    setValue(selectActualValues.filter((value: any) => value[keyword] !== valueToDelete[keyword]))
  }

  useEffect(() => {
    setActualSelectValues(actualValues)
  }, [actualValues])

  useEffect(() => {
    setSelectValues(totalValues)
  }, [totalValues])

  return (<>
    <SelectTagInputContainer>
      {
        (selectActualValues.length !== 0) &&
        <div className="tagsContainer">
          {selectActualValues.map((item: any, index: number) => <div className="tag" key={index}>
            <span>{item[keyword]}</span>
            <span className='icon-close-tag' onClick={() => deleteValue(item)} >
              <IoMdClose />
            </span>
          </div>)}
        </div>
      }
      <SelectModal
        width='100%'
        closeOnSelect={false}
        buttonWidth='100%'
        toUp={toUp}
        buttonElement={
          <InputSimple
            title={title}
            onChange={searchValue}
            error={error}
            ref={input}
            required={required}
            disabled={disabled}
            uppercase={uppercase}
          />
        }>
        {selectValues.map((value: any, index: any) =>
          <div className={`optionItem${(selectActualValues.some(((item: any) => item[keyword] === value[keyword])) ? ' value-selected' : '')}`}
            key={index}
            onClick={(e) => handleValue(value, e)}
            style={{ textTransform: `${uppercase ? 'uppercase' : 'initial'}` }}
          >
            {value[keyword]}
          </div>)}
      </SelectModal>
    </SelectTagInputContainer>
    {error && <LabelError>{error.message}</LabelError>}
  </>)
}
export default React.memo(SelectTagInput)