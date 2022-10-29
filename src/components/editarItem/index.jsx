import React, { useEffect, useState, useContext } from 'react'
import { Container, EditarContainer } from './styles';
import 'date-fns';
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import changeData from 'services/changeData';
import useGetPacientes from 'hooks/useGetPacientes'
import { useForm, Controller } from "react-hook-form";
import Context from '../../context/languageContext';

import { ErrorMessage } from "@hookform/error-message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MessageError } from 'components/anadir/styles';

const turnos = [
  { value: 'Mañana', label: 'Mañana' },
  { value: 'Tarde', label: 'Tarde' },
  { value: 'Noche', label: 'Noche' }
]

export default function EditarPaciente({ itemActual, setEditar, type, setPacientes, setPacientesTotal }) {
  const { pacientes } = useGetPacientes('')
  const { language, setLanguage, texts } = useContext(Context)
  const { handleSubmit, register, setError, watch, clearErrors, control, formState: { errors } } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: "all",
    defaultValues: {
      vigencia: (type === 'Paciente') ? new Date(...itemActual.vigencia.split('/').reverse()) : null,
      centro: (type === 'Paciente') ? { value: itemActual.centro, label: itemActual.centro } : null,
      turno: (type === 'Personal') ? { value: itemActual.turno, label: itemActual.turno } : null,
      sala: (type === 'Camas') ? { value: itemActual.sala, label: `Sala ${itemActual.sala}` } : null,
      paciente: (type === 'Camas') ? { value: itemActual.idUsuario, label: itemActual.nombre } : null,
    }
  })
  // const [horario, setHorario] = useState(new Date())

  // const handleDateChange = (date) => {
  //   setHorario(date)
  // };
  const GETDATA = {
    Paciente: (data) => {
      data.centro = data.centro.value
      data.vigencia = `${data.vigencia.getDate()}/${data.vigencia.getMonth()}/${data.vigencia.getFullYear()}`
      data.id = itemActual.id
      return data
    },
    Personal: (data) => {
      data.id = itemActual.id
      data.turno = data.turno.value
      return data
    },
    Camas: (data) => {
      data.sala = data.sala.value
      data.id = itemActual.idcamas
      data.paciente = data.paciente.value
      return data
    }
  }

  const editarData = (data, e) => {
    changeData({ data: GETDATA[type](data), type })
      .then(res => {
        console.log(res)
        setPacientes(res)
        setPacientesTotal(res)
        setEditar(false)
      })
  }

  return (<>
    <Container>
      <EditarContainer onSubmit={handleSubmit(editarData)}>
        <h1>Editar {type}</h1>
        {(type !== 'Camas') ? <>
          <div className="editarItem">
            <label htmlFor="dni">DNI</label>
            <input type="text" id='dni' defaultValue={itemActual.dni} disabled />
          </div>
          <div className="editarItem">
            <label htmlFor="nombre">{texts[language].Nombre}</label>
            <input type="text" id='nombre' defaultValue={itemActual.nombre} disabled />
          </div>
          <div className="editarItem">
            <label htmlFor="correo">{texts[language].Correo}</label>
            <input
              type="text"
              name='correo'
              autoComplete='off'
              defaultValue={itemActual.email}
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
        </> : null}
        {
          (type === 'Paciente')
            ? <>
              <div className="editarItem">
                <label htmlFor="vigencia">{texts[language].Vigencia}</label>
                <Controller
                  name="vigencia"
                  isClearable
                  control={control}
                  render={({ field }) => (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justifyContent="space-around">
                        <KeyboardDatePicker
                          {...field}
                          name="vigencia"
                          margin="normal"
                          id="date-picker-dialog"
                          format="dd/MM/yyyy"
                          // value={new Date()}
                          // onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                          style={{ width: '100%' }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                  )}
                  rules={{
                    required: 'Elija un vigencia'
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="vigencia"
                  render={({ messages }) => {
                    return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
                  }}
                />
              </div>
              {/* <div className="editarItem">
                <Select
                  options={[
                    { value: 'Titular', label: 'Titular' },
                    { value: 'No Titular', label: 'No titular' }
                  ]}
                  name="sala"
                  // value={especialidad}
                  placeholder='Elige una sala'
                  id='tipo'
                />
              </div> */}
              <div className="editarItem">
                <label htmlFor="centro">{texts[language].CentroAsistencial}</label>
                <Controller
                  name="centro"
                  isClearable
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        { value: 'UNMSM', label: 'UNMSM' },
                        { value: 'PUCP', label: 'PUCP' }
                      ]}
                      name="centro"
                      // value={especialidad}
                      placeholder='Elige un centro asistencial'
                      id='centro'
                    />
                  )}
                  rules={{
                    required: 'Elija un centro'
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="centro"
                  render={({ messages }) => {
                    return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
                  }}
                />
              </div>
            </> : (type === 'Personal')
              ? <div className="editarItem">
                <label htmlFor="Turno">{texts[language].Turno}</label>
                <Controller
                  name="turno"
                  isClearable
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={turnos}
                      name="turno"
                      placeholder='Elige un turno'
                      id='turno'
                    />
                  )}
                  rules={{
                    required: 'Elija un turno'
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="turno"
                  render={({ messages }) => {
                    return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
                  }}
                />
              </div> : <>
                <div className="editarItem">
                  <label htmlFor="sala">{texts[language].Sala}</label>
                  <Controller
                    name="sala"
                    isClearable
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: '1', label: 'Sala 1' },
                          { value: '2', label: 'Sala 2' }
                        ]}
                        name="sala"
                        id='sala'
                        placeholder='Elige una sala'
                      />
                    )}
                    rules={{
                      required: 'Elija una sala'
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="sala"
                    render={({ messages }) => {
                      return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
                    }}
                  />
                </div>
                <div className="editarItem">
                  <label htmlFor="paciente">{texts[language].Paciente}</label>
                  <Controller
                    name="paciente"
                    isClearable
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={pacientes}
                        // name="paciente"
                        // value={especialidad}
                        placeholder='Elige un paciente'
                        id='pacientescama'
                        styles={{
                          menuList: styles => ({ ...styles, maxHeight: '200px' }),
                        }}
                      />
                    )}
                    rules={{
                      required: 'Elija un paciente'
                    }}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="paciente"
                    render={({ messages }) => {
                      return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
                    }}
                  />
                </div>
              </>
        }
        <div className="buttons">
          <button className='button' type='submit'>{texts[language].Aceptar}</button>
          <button className='button' onClick={() => setEditar(false)}>{texts[language].Cancelar}</button>
        </div>
      </EditarContainer>
    </Container>
  </>)
}
