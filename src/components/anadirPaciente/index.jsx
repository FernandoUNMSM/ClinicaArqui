import React, { useState } from 'react'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Controller } from "react-hook-form";                      // value={especialidad}
import { MessageError } from '../anadir/styles';
import { ErrorMessage } from "@hookform/error-message";

export default function AnadirPaciente({ control, errors }) {
  const [horario, setHorario] = useState(new Date())

  const handleDateChange = (date) => {
    setHorario(date)
  };

  return (<>
    <div className="formItem">
      <label htmlFor="vigencia">Vigencia</label>
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
                // value={horario}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                style={{ width: '100%' }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        )}
        rules={{
          required: 'Elija una fecha'
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
    <div className="formItem">
      <label htmlFor="tipoSeguro">Tipo de seguro</label>
      <Controller
        name="tipoSeguro"
        isClearable
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'Titular', label: 'Titular' },
              { value: 'Otro', label: 'Otro' }
            ]}
            name="tipoSeguro"
            placeholder='Elige un turno'
          />
        )}
        rules={{
          required: 'Elija una especialidad'
        }}
      />
      <ErrorMessage
        errors={errors}
        name="tipoSeguro"
        render={({ messages }) => {
          return messages ? <MessageError><p>{messages.required}</p></MessageError> : null
        }}
      />
    </div>
    <div className="formItem">
      <label htmlFor="centro">Centro Asistencial</label>
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
            placeholder='Elige un turno'
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
  </>)
}