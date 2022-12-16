import React, { useState, useEffect, useRef } from 'react'
import SelectModal from './../../modal/selectModal'
import { InputSimple } from '../input'
import SpinLoader from './../../loader/spinLoader'
import { LabelError } from '../input/styles'

function SelectWithInput({ values, actualValue = undefined, setSelectedValue, title, keyword = 'name', toUp = false, error = false, required = false, disabled = false, uppercase = false }: any, ref: any) {
  const [selectValues, setSelectValues] = useState(values)
  const input: any = useRef(null)

  const searchValue = (e: any) => {
    const value = e.target.value.toLowerCase()
    setSelectValues(values.filter((item: any) => item[keyword].toLowerCase().includes(value)))
    if (value === '') {
      setSelectedValue(undefined)
    }
  }

  const handleValue = (value: any) => {
    setSelectedValue(value)
    if (ref) {
      ref.current.value = value[keyword]
    } else {
      input.current.value = value[keyword]
    }
  }

  useEffect(() => {
    setSelectValues(values)
  }, [values])

  useEffect(() => {
    if (!actualValue) {
      setSelectedValue(undefined)
      if (ref) {
        ref.current.value = ''
      } else {
        input.current.value = ''
      }
      return
    }
    handleValue(actualValue)
  }, [actualValue])

  useEffect(() => {
    return () => setSelectedValue(undefined)
  }, [])

  return (<>
    <div style={{ backgroundColor: 'transparent' }}>
      <SelectModal
        toUp={toUp}
        width='100%'
        buttonWidth='100%'
        disabled={disabled}
        buttonElement={
          <InputSimple
            title={title}
            onChange={searchValue}
            ref={ref || input}
            error={error}
            required={required}
            disabled={disabled}
            uppercase={uppercase}
          />
        }>
        {selectValues ? selectValues.map((value: any, index: any) =>
          <div className='optionItem'
            key={index}
            onClick={() => handleValue(value)}
            style={{ textTransform: `${uppercase ? 'uppercase' : 'initial'}` }}
          >
            {value[keyword]}
          </div>)
          : <SpinLoader />
        }
      </SelectModal>
      {error &&
        <LabelError>
          {error.message}
        </LabelError>
      }
    </div>
  </>)
}
export default React.memo(React.forwardRef(SelectWithInput))