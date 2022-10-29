import React, { useEffect, useState } from 'react'
import { DoctoresContainer } from './styles'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tabla from 'components/Tabla'
import getDoctores from "services/getDoctores";
import Context from '../../context/languageContext';
import { useContext } from 'react';
import setFont2 from '../../services/setFont';
export default function ChooseDoctor({ updateDoctor, especialidad, turno }) {
  const [doctores, setDoctores] = useState([])
  const { language, setLanguage, texts } = useContext(Context)

  useEffect(() => {
    updateDoctor('')
    getDoctores({ especialidad, turno })
      .then(res => {
        setDoctores(res)

        setFont2(font)
      })
  }, [])

  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    borrarSeleccion()

    const row = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    updateDoctor({ id: row.id, name: row.childNodes[0].textContent })
    const checkBoxes = document.getElementsByName('Checkbox')

    setCheck(!check)

    checkBoxes.forEach(checkbox => {
      if (check) {
        checkbox.removeAttribute('disabled')
      }
      else {
        row.classList.add('on')
        checkbox.setAttribute('disabled', true)
      }
    })

    event.target.removeAttribute('disabled')
  };

  const borrarSeleccion = () => {
    const rows = document.querySelectorAll('.on')
    rows.forEach(row => row.classList.remove('on'))
  }
  const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  const [size, setSize] = useState(localStorage.getItem('fontSize'))
  useEffect(() => {
    if (font !== null) {
      setFont2(font, size)
    }
  }, [])



  return (<>
    <DoctoresContainer>
      <div className="nose">
        <Tabla>
          <div className="tablaDoctores">
            <table>
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>{texts[language].Horario}</th>
                  {/* <th>{texts[language].Perfil}</th> */}
                  <th className="selecc">{texts[language].Seleccionar}</th>
                </tr>
              </thead>
              <tbody>
                {
                  doctores.map((doctor, index) =>
                    <tr key={doctor.idDoc} id={doctor.idDoc}>
                      <td>{doctor.nombre + ' ' + doctor.apellidoP}</td>
                      <td>{doctor.turno}</td>
                      {/* <td>
                        <button>Ver Perfil</button>
                      </td> */}
                      <td>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name={`Checkbox`}
                              id={`Checkbox ${index}`}
                            />
                          }
                        />
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </Tabla>
      </div>
    </DoctoresContainer>
  </>)
}