import { useEffect, useState } from 'react'
import getPacientes from 'services/listarPacientes'

export default function useGetPacientes({ }) {
  const [pacientes, setPacientes] = useState([{value: 'Sin paciente', label: 'Desocupar'}])

  const fetchData = () => {
    getPacientes()
      .then(res => {
        setPacientes(prev => prev.concat(res.map(user => {
          const userN = {
            value: user.id,
            label: user.nombre
          }
          return userN
        })))
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return { pacientes }
}