import { useState, useRef, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { ButtonSolid } from 'styles/globals/globalButtons'
import { InputSimple } from '../input'
import { InputTagContainer } from './styles'

export default function InputTag({ title, actualValues = [], type = 'number', setValue }: any) {
  const [values, setValues]: any = useState(actualValues)
  const [actualValue, setActualvalue] = useState('')
  const input: any = useRef(null)

  const emailRegex = /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i

  const addValue = () => {
    const newValue: any = input.current.value
    if (type === 'email') {
      if (!newValue.match(emailRegex)) return
    }
    if (values.includes(newValue)) {
      setActualvalue('')
      input.current.value = ''
      input.current.focus()
      return
    }
    setValues(values.concat(newValue))
    setActualvalue('')
    input.current.value = ''
    input.current.focus()
  }

  const deleteValue = (value: any) => {
    const index = values.indexOf(value)
    setActualvalue(values.splice(index, 1))
  }

  useEffect(() => {
    setValue(values)
  }, [values])

  return (<>
    <InputTagContainer>
      <div className="inputButtonContainer">
        <div className="inputContainer">
          <InputSimple
            title={title}
            type={type}
            ref={input}
            onChange={(e: any) => setActualvalue(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.code === 'Enter') {
                if (type === 'number' && e.target.value.length !== 9) {
                  return
                }
                addValue()
              }
            }}
            length='9'
          />
        </div>
        <ButtonSolid size='action' onClick={addValue} type='button' disabled={type === 'number' && actualValue.length < 9}>Add</ButtonSolid>
      </div>
      <div className="tagsContainer">
        {values.map((value: any, index: number) => <div className="tag" key={index}>
          <span>{value}</span>
          <span className='icon-close-tag' onClick={() => deleteValue(value)} >
            <IoMdClose />
          </span>
        </div>)}
      </div>
    </InputTagContainer>
  </>)
}