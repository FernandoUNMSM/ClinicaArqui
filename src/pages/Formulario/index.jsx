import 'date-fns';
import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { FormularioContainer, Derecha, Izquierda, Centro } from './styles'
import Context from '../../context/languageContext';
import { useContext } from 'react';
import setFont2 from '../../services/setFont';

export default function Formulario ({ especialidad, updateEspecialidad, horario, updateHHorario,turno, updateTurno, updateExtra}){

  const handleDateChange = (date) => {
    const fecha = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    updateHHorario({fecha, date})
  };
  const {language, setLanguage, texts} = useContext(Context)

  const Especialidad = [
    { value: 'cardiologia', label: 'Cardiologia' },
    { value: 'traumatologia', label: 'Traumatologia' },
    { value: 'oncologia', label: 'Oncologia' }
  ]
  const turnos = [
    {value: 'mañana', label: 'Mañana'},
    {value: 'tarde', label: 'Tarde'},
    {value: 'noche', label: 'Noche'}
  ]
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(()=> {
    console.log(turno)
    if(font !== null) {
      setFont2(font, size)
    }
  },[])

  // Se realiza el formulario para que el paciente realice la cita
  return (<>
    <FormularioContainer>
      <Derecha>
        <div className="inputInfo">
          <h2>{texts[language].Especialidad}</h2>
          <div className="select">
            <Select
              options={Especialidad}
              name="especialidad"
              value={especialidad}
              placeholder={texts[language].EligeEspecialidad}
              onChange={ (evt) => updateEspecialidad(evt)}
              styles={{
                menuList: styles => ({ ...styles, maHeight: '200px'}),
              }}
            />
          </div>
        </div>
        <div className="inputInfo">
          <h2>{texts[language].Fecha}</h2>
          <div className="select">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justifyContent="space-around">
                <KeyboardDatePicker
                  name="fecha"
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd/MM/yyyy"
                  value={horario.date}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  style={{width: '100%'}}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div className="inputInfo">
          <h2>{texts[language].Turno}</h2>
          <div className="select">
            <Select
              options={turnos}
              name="turno"
              value={turno}
              placeholder={texts[language].EligeTurno}
              onChange={(evt) => updateTurno(evt)}
              styles={{
                menu: styles => ({ ...styles, position: 'absolute' }),
              }}
              />
          </div>
        </div>
      </Derecha>
      <Centro>
        <span></span>
      </Centro>
      <Izquierda>
        <div className="extraInfo">
          <h2>{texts[language].Extra}</h2>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </Izquierda>
    </FormularioContainer>
  </>)
}