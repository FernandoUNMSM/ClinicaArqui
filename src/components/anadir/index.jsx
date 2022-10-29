import React from 'react'
import { Container, AnadirContainer, TitleContainer, FormContainer, MessageError } from './styles'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import AnadirCamas from 'components/anadirCamas'
import AnadirPersonal from 'components/anadirPersonal'
import AnadirPaciente from 'components/anadirPaciente'
import createDoctor from 'services/crearDoctor'
import createCama from 'services/crearCama'
import createPaciente from 'services/crearPaciente'
import useGetInfoDNI from '../../hooks/useGetInfoDNI'
import { useState } from 'react';
import Errormodal from 'components/errormodal/errormodal'

export default function Anadir({ type, setAnadir, setPacientesTotal, setPacientes }) {
  const { getInfo, datesDNI } = useGetInfoDNI('')
  const [message, setMessage] = useState()
  const [showMessage, setErrorM] = useState(false)
  const { handleSubmit, register, setError, watch, clearErrors, control, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: "all",
    defaultValues: {
      vigencia: (type === 'Paciente') ? new Date() : null,
    }
  })

  const SERVICES = {
    Personal: (data) => {
      data.especialidad = data.especialidad.value
      data.turno = data.turno.value
      data.nombre = datesDNI.noNombres
      data.apellidoP = datesDNI.apePaterno
      data.apellidoM = datesDNI.apeMaterno
      data.sexo = datesDNI.idSexo
      data.direccion = datesDNI.deDireccion
      data.fechanac = datesDNI.feNacimiento.split('T')[0]

      createDoctor(data).then(res => {
        setPacientesTotal(res.doctores)
        setPacientes(res.doctores)
        if (res.msg !== 'Doctor creado') {
          setErrorM(true)
          setMessage(res.msg)
        } else {
          setAnadir(false)
        }
        // setAnadir(false)
      })
    },
    Paciente: (data) => {
      data.tipoSeguro = data.tipoSeguro.value
      data.centro = data.centro.value
      data.nombre = datesDNI.noNombres
      data.apellidoP = datesDNI.apePaterno
      data.apellidoM = datesDNI.apeMaterno
      data.sexo = datesDNI.idSexo
      data.direccion = datesDNI.deDireccion
      data.fechanac = datesDNI.feNacimiento.split('T')[0]
      data.vigencia = `${data.vigencia.getDate()}/${data.vigencia.getMonth() + 1}/${data.vigencia.getFullYear()}`

      createPaciente(data).then(res => {
        setPacientesTotal(res.paciente)
        setPacientes(res.paciente)
        if (res.msg !== 'Paciente creado') {
          setErrorM(true)
          setMessage(res.msg)
        } else {
          setAnadir(false)
        }
      })
    },
    Camas: (data) => {
      data.paciente = data.paciente.value
      data.sala = data.sala.value
      createCama(data).then(res => {
        setPacientesTotal(res)
        setPacientes(res)
        setAnadir(false)
      })
    },
  }

  const changeAnadir = () => {
    setAnadir(false)
  }

  const enviarForm = (data, evt) => {
    evt.preventDefault();
    SERVICES[type](data)
  }

  const validateNumbers = (evt) => {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
      evt.preventDefault();
    }
  }

  const dni = register('dni', {
    minLength: {
      value: 8,
      message: 'El dni deben ser 8 digitos'
    }
  })

  return (<>
    <Container>
      {
        (showMessage)
          ? <Errormodal setErrorM={setErrorM} message={message} type='otro' />
          : null
      }
      <AnadirContainer>
        <TitleContainer>
          <h1><FontAwesomeIcon icon={faFileAlt} /> Añadir {type}</h1>
          <FontAwesomeIcon icon={faTimes} onClick={changeAnadir} className='icon' />
        </TitleContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(enviarForm)}>
            {
              (type !== 'Camas')
                ? <>
                  <div className="formItem">
                    <label htmlFor="dni">DNI</label>
                    <input
                      type="text"
                      name='dni'
                      autoComplete='off'
                      required
                      onKeyPress={validateNumbers}
                      maxLength='8'
                      onChange={(evt) => {
                        dni.onChange(evt)
                        getInfo(evt)
                      }}
                      onBlur={dni.onBlur}
                      ref={dni.ref}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="dni"
                      maxLength='8'
                      render={({ messages }) => {
                        return messages
                          ? <MessageError><p>{messages.minLength}</p></MessageError>
                          : null;
                      }}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      name='nombre'
                      disabled required
                      defaultValue={datesDNI.noNombres}
                      {...register('nombre')}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="apellidoP">Apellido Paterno</label>
                    <input
                      type="text"
                      name='apellidoP'
                      autoComplete='off'
                      disabled required
                      defaultValue={datesDNI.apePaterno}
                      {...register('apellidoP')} />
                  </div>
                  <div className="formItem">
                    <label htmlFor="apellidoM">Apellido Materno</label>
                    <input
                      type="text"
                      name='apellidoM'
                      autoComplete='off'
                      disabled required
                      defaultValue={datesDNI.apeMaterno}
                      {...register('apellidoM')}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="sexo">Sexo</label>
                    <input
                      type="text"
                      name='sexo'
                      autoComplete='off' disabled required
                      {...register('sexo')}
                      defaultValue={(datesDNI.idSexo === 'M')
                        ? 'Masculino'
                        : (datesDNI.idSexo === 'F') ? 'Femenino' : ''} />
                  </div>
                  <div className="formItem">
                    <label htmlFor="fechanac">Fecha de Nacimiento</label>
                    <input
                      type="text"
                      name='fechanac'
                      autoComplete='off'
                      disabled required
                      defaultValue={(datesDNI.feNacimiento != null) ? datesDNI.feNacimiento.split('T')[0] : ''}
                      {...register('fechanac')}
                    />
                  </div>
                  <div className="formItem">
                    <label htmlFor="direccion">Direccion</label>
                    <input
                      type="text"
                      name='direccion'
                      autoComplete='off'
                      disabled required
                      defaultValue={datesDNI.deDireccion}
                      {...register('direccion')}
                    />
                  </div>
                </> : null
            }
            {(type === 'Personal') ? <AnadirPersonal control={control} errors={errors} /> : null}
            {(type === 'Paciente') ? <AnadirPaciente control={control} errors={errors} /> : null}
            {(type === 'Camas') ? <AnadirCamas control={control} errors={errors} /> : <>
              <h2>Credenciales</h2>
              <div className="formItem">
                <label htmlFor="correo">Correo</label>
                <input
                  type="text"
                  name='correo'
                  autoComplete='off'
                  // required
                  {...register('correo', {
                    pattern: {
                      value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/g,
                      message: 'El correo debe seguir el patron xxxx@xxxx.xxxx'
                    },
                    required: {
                      value: true,
                      message: 'Escriba un correo'
                    }
                  })} />
                <ErrorMessage
                  errors={errors}
                  name="correo"
                  render={({ messages }) => {
                    return messages ? <MessageError><p>{messages.pattern || messages.required}</p></MessageError> : null;
                  }}
                />
              </div>
              <div className="formItem">
                <label htmlFor="contrasena">Contraseña</label>
                <input
                  type="password"
                  name='contrasena'
                  autoComplete='off'
                  // required
                  {...register('password', {
                    minLength: {
                      value: 3,
                      message: 'La contraseña debe tener 8 digitos como minimo(por ahora solo 123 xfa)',
                    },
                    required: {
                      value: true,
                      message: 'Escriba una contraseña'
                    }
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ messages }) => {
                    return messages ? <MessageError><p>{messages.minLength || messages.required}</p></MessageError> : null
                  }}
                />
              </div>
            </>}
            <div className="buttons">
              <button className='button buttonc'>Enviar</button>
              <button className='button buttonc' type='button' onClick={changeAnadir}>Cancelar</button>
            </div>
          </form>
        </FormContainer>
      </AnadirContainer>
    </Container>
  </>)
}