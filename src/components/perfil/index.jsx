import React, { useEffect, useState, useContext } from 'react'
import { PerfilContainer, TopPerfil, MiddlePerfil, MiddleContainer, Info } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUsersCog, faTrash, faPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Context from '../../context/languageContext';
import setFont2 from '../../services/setFont';
import PerfilInfo from 'components/PerfilInfo';
import getCitas from 'services/getCitas.js'
import terminarCita from 'services/terminarCita'
import ConcluirCita from '../concluirCita';

export default function Perfil({
  user = JSON.parse(sessionStorage.getItem('usuario')),
  familiares = JSON.parse(sessionStorage.getItem('familiares'))
}) {
  const { language, setLanguage, texts } = useContext(Context)

  // const [font, setFont] = useState(localStorage.getItem('fontFamily'))
  // const [size, setSize] = useState(localStorage.getItem('fontSize'))

  // useEffect(() => {
  //   if (font !== null) {
  //     setFont2(font, size)
  //   }
  // }, [])
  // const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('usuario')))
  const tipoUsuario = user.tipoUsuario;

  const [citas, setCitas] = useState([])
  const [confirm, setConfirm] = useState(false)
  const [id, setID] = useState(false)

  const concluirCita = (idCita) => {
    setID(idCita)
    setConfirm(true)
    // setCitas((prev) => prev.filter(el => el.idCita !== idCita))
    // terminarCita({ idCita })
  }

  useEffect(() => {
    if (tipoUsuario === 'doctor') {
      getCitas()
        .then(setCitas)
    }
  }, [])


  return (<>
    <PerfilContainer>
      {(confirm) ? <ConcluirCita setConfirm={setConfirm} id={id} setCitas={setCitas}/> : null}
      <TopPerfil>
        <PerfilInfo user={user} />
      </TopPerfil>
      <MiddlePerfil>
        <MiddleContainer>
          <div className="title">
            <h1>{texts[language].Panel}</h1>
          </div>
          {
            (tipoUsuario === 'paciente')
              ?
              <Info>
                <div className="infoTitle">
                  <h1>
                    <FontAwesomeIcon icon={faUsersCog} className='icon' />
                    {texts[language].FamInfo}
                  </h1>
                </div>
                <div className="infoContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>{texts[language].Nombre}</th>
                        <th>{texts[language].Parentesco}</th>
                        <th>{texts[language].Correo}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        familiares.map(familiar => {
                          return (
                            <tr key={familiar.idfamiliar}>
                              <td>{`${familiar.nombre} ${familiar.apellidoP} ${familiar.apellidoM}`}</td>
                              <td>{familiar.parentesco}</td>
                              <td>{familiar.correo}</td>
                              <td>
                                <div className="opciones">
                                  <FontAwesomeIcon icon={faEdit} className='icon' />
                                  <FontAwesomeIcon icon={faTrash} className='icon' />
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                  {/* <div className="anadirFamiliar">
                      <FontAwesomeIcon icon={faPlus} />
                    </div> */}
                </div>
              </Info>
              : null
          }
          {
            (tipoUsuario === 'doctor')
              ?
              <Info>
                <div className="infoTitle">
                  <h1>
                    <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                    {texts[language].CitaInfo}
                  </h1>
                </div>
                <div className="infoContainer">
                  <table>
                    <thead>
                      <tr>
                        <th>{texts[language].Fecha}</th>
                        <th>{texts[language].Horario}</th>
                        <th>{texts[language].Paciente}</th>
                        {/* <th>Perfil</th> */}
                        <th>{texts[language].Concluir}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        citas.map(cita =>
                          <tr key={cita.idCita}>
                            <td>{cita.fecha}</td>
                            <td>{cita.turno}</td>
                            <td>{cita.paciente}</td>
                            {/* <td>
                              <button className='buttonConcluir'>Ver Perfil</button>
                            </td> */}
                            <td>
                              <button onClick={() => concluirCita(cita.idCita)} className='buttonConcluir'>{texts[language].Concluir}</button>
                            </td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </Info>
              : null
          }
        </MiddleContainer>
      </MiddlePerfil>
    </PerfilContainer>
  </>)
}
