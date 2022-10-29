import {useReducer} from 'react'

const ACTIONS = {
  UPDATE_ESPECIALIDAD: 'update_especialidad',
  UPDATE_HORARIO: 'update_horario',
  UPDATE_TURNO: 'update_turno',
  UPDATE_DOCTOR: 'update_doctor',
  UPDATE_EXTRA: 'update_extra',
  RESET_FILTERS: 'reset_filters'
}

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_ESPECIALIDAD]: (state, action) => ({
    ...state,
    especialidad: action.payload,
  }),
  [ACTIONS.UPDATE_HORARIO]: (state, action) => ({
    ...state,
    horario: action.payload
  }),
  [ACTIONS.UPDATE_TURNO]: (state, action) => ({
    ...state,
    turno: action.payload
  }),
  [ACTIONS.UPDATE_DOCTOR]: (state, action) => ({
    ...state,
    doctor: action.payload
  }),
  [ACTIONS.UPDATE_EXTRA]: (state, action) => ({
    ...state,
    extra: action.payload
  }),
  [ACTIONS.RESET_FILTERS]: (state, action) => ({
    ...state,
    especialidad: action.payload.especialidad,
    horario: action.payload.horario,
    turno: action.payload.turno,
    doctor: action.payload.doctor,
    extra: action.payload.extra,
  })
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useForm ({initialEspecialidad = '', initialHorario = new Date(), initialTurno = '', initialDoctor = '', initialExtra = ''} = {})  {
  const [state, dispatch] = useReducer(reducer, {
    especialidad: initialEspecialidad,
    horario: {fecha: `${initialHorario.getDate()}/${initialHorario.getMonth()+1}/${initialHorario.getFullYear()}`, date: initialHorario},
    turno: initialTurno,
    doctor: initialDoctor,
    extra: initialExtra,
  })

  const {
    especialidad,
    horario,
    turno,
    doctor,
    extra } = state

  return {
    especialidad,
    horario,
    turno,
    doctor,
    extra,
    updateEspecialidad: especialidad => dispatch({ type: ACTIONS.UPDATE_ESPECIALIDAD, payload: especialidad }),
    updateHHorario: horario => dispatch({ type: ACTIONS.UPDATE_HORARIO, payload: horario}),
    updateTurno: turno => dispatch({type: ACTIONS.UPDATE_TURNO, payload: turno}),
    updateDoctor: doctor => dispatch({type: ACTIONS.UPDATE_DOCTOR, payload: doctor}),
    updateExtra: extra => dispatch({type: ACTIONS.UPDATE_EXTRA, payload: extra}),
    resetFilters: () => dispatch({type: ACTIONS.RESET_FILTERS, payload: {
      especialidad: '',
      horario: '',
      turno: '',
      doctor: '',
      extra: '',
    }})
  }
}