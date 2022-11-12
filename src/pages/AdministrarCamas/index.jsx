import React, { useState, useEffect } from 'react'
import { Container, TitleContainer, PacienteContainer, BuscadorContainer, TablaContainer, AnadirContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Tabla from 'components/Tabla'
import getCamas from 'services/getCamas'
import { Link } from 'react-router-dom'
import Anadir from 'components/anadir'
import ButtonAnadir from 'components/buttonAnadir'
import setFont2 from '../../services/setFont';
import Context from '../../context/languageContext';
import { useContext } from 'react';
import changeCama from '../../services/changeCama'
import Select from 'react-select'
import getPacientes from '../../services/listarPacientes'

export default function AdministrarCamas({ }) {
  const [camas, setCamas] = useState([])
  const [anadir, setAnadir] = useState(false)
  const [editar, setEditar] = useState(false)

  const [usuario, setUsuario] = useState([])
  // const { language, setLanguage, texts } = useContext(Context)

  const [seccion, setSeccion] = useState('')


  // useEffect(() => {
  //   getCamas()
  //     .then(setCamas)
  // }, [])

  // const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  // const [size, setSize] = useState(localStorage.getItem('fontSize'))
  // useEffect(() => {
  //   if (font !== null) {
  //     setFont2(font, size)
  //   }
  // }, [])

  const editarCama = (evt) => {
    setEditar(!editar)

    const sala = document.querySelector('#sala')
    const ocupada = document.querySelector('#ocupada')
    const paciente = document.querySelector('#paciente')
    // const row = evt.target.parentNode.parentNode
    // setSeccion(row.id)
    changeCama({
      idCama: row.id,
      sala: sala.childNodes[2].value,
      estado: ocupada.childNodes[2].value,
      idUsuario: paciente.childNodes[2].value
    }).then(setCamas)
  }
  useEffect(() => {
    // getPacientes()
    //   .then(res => {
    //     setUsuario(prev => prev.concat(res.map(user => {
    //       const userN = {
    //         value: user.id,
    //         label: user.nombre
    //       }
    //       return userN
    //     })))
    //   })
  }, [])

  return (<>
    {
      (anadir)
        ? <Anadir type='Camas' setAnadir={setAnadir} setCamas={setCamas} />
        : null
    }
    <Container>
      <TitleContainer>
        <Link to='/ClinicaAdministrador'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon' />
        </Link>
        <h1>{texts[language].AdministrarCamas}</h1>
      </TitleContainer>
      <PacienteContainer>
        <BuscadorContainer>
          {/* <input type="text" /> */}
        </BuscadorContainer>
        <TablaContainer>
          <Tabla>
            <div className="tablapacientees">
              <table>
                <thead>
                  <tr>
                    <th>{texts[language].Cama}</th>
                    <th>{texts[language].Sala}</th>
                    <th>{texts[language].Ocupada}</th>
                    <th>{texts[language].Paciente}</th>
                    <th>Cambiar estado</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    camas.map((cama, index) =>
                      <tr key={cama.idcamas} id={cama.idcamas}>
                        <td>{cama.idcamas}</td>
                        {
                          (editar && seccion == cama.idcamas)
                            ? <>
                              <td>
                                <Select
                                  options={[
                                    { value: '1', label: 'Sala 1' },
                                    { value: '2', label: 'Sala 2' }
                                  ]}
                                  name="sala"
                                  // value={especialidad}
                                  placeholder='Elige una sala'
                                  id='sala'
                                  styles={{
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td>
                                <Select
                                  options={[
                                    { value: 'Ocupada', label: 'Ocupada' },
                                    { value: 'Sin ocupar', label: 'Sin ocupar' }
                                  ]}
                                  name="ocupada"
                                  // value={especialidad}
                                  placeholder='Elige'
                                  id='ocupada'
                                  styles={{
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td className='paciente'>
                                <Select
                                  options={usuario}
                                  name="paciente"
                                  // value={especialidad}
                                  placeholder='Elige un paciente'
                                  id='paciente'
                                  styles={{
                                    menuList: styles => ({ ...styles, maxHeight: '200px' }),
                                    control: styles => ({ ...styles, width: 'calc(100% - 40px)' })
                                  }}
                                />
                              </td>
                              <td>
                                <button onClick={editarCama}>Aceptar</button>
                                <button onClick={() => setEditar(false)}>Cancelar</button>
                              </td>
                            </>
                            : <>
                              <td>{cama.sala}</td>
                              <td>{cama.estado}</td>
                              <td className='paciente'>{cama.nombre}</td>
                              <td>
                                <button className='button' onClick={(evt) => {
                                  const row = evt.target.parentNode.parentNode
                                  setSeccion(row.id)
                                  setEditar(!editar)
                                }}>Editar</button>
                              </td>
                            </>
                        }
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </Tabla>
        </TablaContainer>
        <AnadirContainer>
          <ButtonAnadir type='Camas' setAnadir={setAnadir}>
            {texts[language].AnadirCama}
          </ButtonAnadir>
        </AnadirContainer>
      </PacienteContainer>
    </Container>
  </>)
}