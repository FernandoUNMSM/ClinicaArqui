import React from 'react'
import Select from 'react-select'
import { Controller } from "react-hook-form";
import { MessageError } from '../anadir/styles';
import { ErrorMessage } from "@hookform/error-message";
const Especialidad = [
  { value: 'Cardiologia', label: 'Cardiologia' },
  { value: 'Traumatologia', label: 'Traumatologia' },
  { value: 'Oncologia', label: 'Oncologia' }
]
const turnos = [
  { value: 'Mañana', label: 'Mañana' },
  { value: 'Tarde', label: 'Tarde' },
  { value: 'Noche', label: 'Noche' }
]

// Vista donde se puede añadir los tipos de doctores a la clinica
export default function AnadirPersonal({ control, errors }) {
  return (<>
    <div className="formItem">
      <label htmlFor="especialidad">Especialidad</label>
      <Controller
        name="especialidad"
        isClearable
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={Especialidad}
            name="especialidad"
            placeholder='Elige una especialidad'
          />
        )}
        rules={{
          required: 'Elija una especialidad'
        }}
      />
      <ErrorMessage
        errors={errors}
        name="especialidad"
        render={({ messages }) => {
          return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
        }}
      />
    </div>
    <div className="formItem">
      <label htmlFor="turno">Turno</label>
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
    </div>
  </>)
}