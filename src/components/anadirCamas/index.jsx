import React from 'react'
import Select from 'react-select'
import useGetPacientes from 'hooks/useGetPacientes'
import { Controller } from "react-hook-form";
import { MessageError } from '../anadir/styles';
import { ErrorMessage } from "@hookform/error-message";

export default function AnadirCamas({ control, errors }) {
  const { pacientes } = useGetPacientes('')

  return (<>
    <div className="formItem">
      <label htmlFor="paciente">Paciente</label>
      <Controller
        name="paciente"
        isClearable
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={pacientes}
            name="paciente"
            // value={especialidad}
            placeholder='Elige un paciente'
            styles={{
              menuList: styles => ({ ...styles, maxHeight: '200px' }),
            }}
          />)}
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
    <div className="formItem">
      <label htmlFor="sala">Sala</label>
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
            placeholder='Elige una sala'
          />)}
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
    {/* <div className="formItem">
      <label htmlFor="ocupada">Ocupada</label>
      <Select
        options={[
          { value: 'Ocupada', label: 'Ocupada' },
          { value: 'Sin ocupar', label: 'Sin ocupar' }
        ]}
        name="ocupada"
        // value={especialidad}
        placeholder='Elige una sala'
      />
    </div> */}
  </>)
}