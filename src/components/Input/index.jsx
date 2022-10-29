import React from 'react'
import { InputContainer, Input, Label, InputContainerSup } from './styles'

function MyInput({ name, maxLength, label, children, ...rest }, ref) {
  return (
    <>
      <InputContainerSup apellido={rest.apellido}>
        <InputContainer>
          <Input
            autoComplete="off"
            name={name}
            type={(name.includes('password')) ? 'password' : 'text'}
            required
            maxLength={maxLength}
            {...rest}
          />
          <Label id='labelLogin'>
            <span>{label}</span>
          </Label>
        </InputContainer>
        {children}
      </InputContainerSup>
    </>
  )
}
export default React.forwardRef(MyInput)