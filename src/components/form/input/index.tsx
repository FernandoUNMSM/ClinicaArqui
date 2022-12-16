import React from 'react'
import { InputContainer, InputItem, LabelError } from './styles'

interface Props {
  named?: string
  title: any,
  type?: string,
  register: any,
  forgot?: any,
  errors: any,
  required?: any;
  placeholder?: string;
  disabled?: any;
  uppercase?: any,
  length?: any
  onChange?: any
}

const validateNumbers = (evt: any, length: any) => {
  const ch = String.fromCharCode(evt.which)
  if (!(/[0-9]/.test(ch))) {
    evt.preventDefault()
  }
  if (length && evt.target.value.concat(ch).length > length) {
    evt.preventDefault()
  }
}

export const InputSimple = React.forwardRef(({ type = 'text', title, error = false, disabled = false, required = false, uppercase = false, length = false, ...rest }: any, ref: any) => {

  return (<>
    <InputContainer error={error} uppercase={uppercase}>
      {
        disabled
          ?
          <InputItem
            type={type}
            placeholder=''
            {...rest}
            ref={ref}
            disabled
            error={error}
          />
          :
          <InputItem
            type={type}
            placeholder=''
            onKeyPress={(type === 'number') ? (evt: any) => validateNumbers(evt, length) : () => { }}
            min='0'
            ref={ref}
            error={error}
            {...rest}
          />
      }
      <div className="title">
        <h1>{title}</h1>
        {(required) && <span>*</span>}
      </div>
    </InputContainer>
  </>)
})

function Input({ named = '', title, type = 'text', disabled, forgot, register, required = false, placeholder = '', errors, uppercase = false, length = false, onChange, ...rest }: Props, ref: any) {
  const { registro, params } = register

  return (<>
    <InputContainer error={errors[named]} uppercase={uppercase}>
      {(disabled)
        ? <InputItem
          name={named}
          type={type}
          error={errors[named]}
          {...registro(named, params)}
          {...rest}
          disabled={disabled}
        />
        : (required) ? <InputItem
          name={named}
          type={type}
          required
          error={errors[named]}
          min="0"
          onKeyPress={(type === 'number') ? (evt: any) => validateNumbers(evt, length) : () => { }}
          placeholder={placeholder}
          {...registro(named, params)}
          onChange={onChange}
          {...rest}
        />
          : <InputItem
            name={named}
            type={type}
            error={errors[named]}
            min="0"
            onKeyPress={(type === 'number') ? (evt: any) => validateNumbers(evt, length) : () => { }}
            placeholder={placeholder}
            {...registro(named, params)}
            onChange={onChange}
            {...rest}
          />
      }
      <div className="title">
        <h1>{title}</h1>
        {(required) && <span>*</span>}
      </div>
    </InputContainer>
    {errors[named] &&
      <LabelError>
        {errors[named].message}
      </LabelError>
    }
  </>)
}
export default React.forwardRef(Input)