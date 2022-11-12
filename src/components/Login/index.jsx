import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormContainer, Title, InputContainer, Button } from './styles'
import { ErrorMessage } from "@hookform/error-message";

import MyInput from 'components/Input'
import Errormodal from 'components/errormodal/errormodal'
import Loader from 'components/loader'

import SendLogin from 'services/sendLogin'

export default function LoginForm({ }) {
  const [loading, setLoading] = useState(false)
  const [errorM, setErrorM] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { handleSubmit, register, clearErrors, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: "all"
  })

  const onSumbit = (data, e) => {
    e.preventDefault()
    setLoading(true)
    SendLogin(data)
      .then((res) => {
        setLoading(false)
        console.log(res)
        if (res.valid) {
          return navigate('/clinica')
        } else {
          setErrorM(true)
          setMessage('Credenciales incorrectas')
        }
      })
  }

  const onError = (errors, e) => {
    const errorInputs = Object.keys(errors)
    errorInputs.forEach((input) => console.log(errors[input]))
  }
  const validateNumbers = (evt) => {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
      evt.preventDefault();
    }
  }

  const getInfo = (evt) => {
    const dni = evt.target.value
    if (dni.length === 8) {
      clearErrors('dni')
    } else {
    }
  }

  const dni = register('dni', {
    minLength: {
      value: 8,
      message: '8 digitos pls'
    }
  })

  return (
    <>
      {(loading) ? <Loader /> : null}
      {(errorM) ? <Errormodal setErrorM={setErrorM} message={message} /> : null}
      <FormContainer>
        <Form onSubmit={handleSubmit(onSumbit, onError)}>
          <Title>Login</Title>
          <InputContainer>
            <MyInput
              name="dni"
              label="DNI"
              maxLength='8'
              onKeyPress={validateNumbers}
              onChange={(evt) => {
                dni.onChange(evt)
                getInfo(evt)
              }}
              onBlur={dni.onBlur}
              ref={dni.ref}
            ></MyInput>
            <ErrorMessage
              errors={errors}
              name="dni"
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                  : null;
              }}
            />
            <MyInput
              name="password"
              label="Contraseña"
              {...register('password')}
            ></MyInput>
          </InputContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Button type="submit">Login</Button>
            <span style={{ marginTop: '10px', fontSize: '12px' }}>
              ¿No tienes una cuenta? <Link to="/Register">Registrate</Link>
            </span>
            <span style={{ marginTop: '10px', fontSize: '12px' }}>
              ¿No te acuerdas tu contraseña?
            </span>
            <span style={{ marginTop: '10px', fontSize: '12px' }}><Link to='/'>Volver al Home</Link></span>
          </div>
        </Form>
      </FormContainer>
    </>
  )
}
//Arreglar los estilos en linea IMPORTANTE
