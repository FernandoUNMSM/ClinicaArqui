import React, { useState, useEffect, useContext } from 'react'
import { Container, CitasContainer, CitaContainer, CitasDates, CitasItem, CitaTitle, CitasSeccion, CitasTitle } from './styles'
import Loader from 'components/loader'
import listCitas from 'services/listCitas';
import Context from '../../context/languageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCloudMoon, faTag, faUserMd } from '@fortawesome/free-solid-svg-icons'

export default function Citas({ }) {
  const [citasPro, setCitasPro] = useState([])
  const [citasTer, setCitasTer] = useState([])
  const [loading, setLoading] = useState(false)
  const { language, setLanguage, texts } = useContext(Context)

  useEffect(() => {
    setLoading(true)
    listCitas()
      .then(res => {
        console.log(res)
        setCitasPro(res.citasPro)
        setCitasTer(res.citasTer)
        setLoading(false)
      })
  }, [])

  return (<>
    <Container>
      {
        (loading)
          ? <Loader />
          : <>
            <CitasSeccion>
              <CitasTitle>
                <h1>{texts[language].CitasProgra}</h1>
              </CitasTitle>
              <CitasContainer>
                {
                  citasPro.map(cita => {
                    return (
                      <CitaContainer key={cita.idCita}>
                        <CitasDates>
                          <CitaTitle>
                            <h1>Cita #{cita.idCita}</h1>
                          </CitaTitle>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faTag} className='icon' />
                              <p>{texts[language].Especialidad}</p>
                            </div>
                            <div className="right">
                              <p>{cita.especialidad}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                              <p>{texts[language].Fecha}</p>
                            </div>
                            <div className="right">
                              <p>{cita.fecha}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faCloudMoon} className='icon' />
                              <p>{texts[language].Turno}</p>
                            </div>
                            <div className="right">
                              <p>{cita.turno}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faUserMd} className='icon' />
                              <p>Doctor</p>
                            </div>
                            <div className="right">
                              <p>{cita.doctor}</p>
                            </div>
                          </CitasItem>
                        </CitasDates>
                      </CitaContainer>
                    )
                  })
                }
              </CitasContainer>
            </CitasSeccion>
            <CitasSeccion>
              <CitasTitle>
                <h1>{texts[language].CitasResc}</h1>
              </CitasTitle>
              <CitasContainer>
                {
                  citasTer.map(cita => {
                    return (
                      <CitaContainer key={cita.idCita}>
                        <CitasDates>
                          <CitaTitle>
                            <h1>Cita #{cita.idCita}</h1>
                          </CitaTitle>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faTag} className='icon' />
                              <p>{texts[language].Especialidad}</p>
                            </div>
                            <div className="right">
                              <p>{cita.especialidad}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
                              <p>{texts[language].Fecha}</p>
                            </div>
                            <div className="right">
                              <p>{cita.fecha}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faCloudMoon} className='icon' />
                              <p>{texts[language].Turno}</p>
                            </div>
                            <div className="right">
                              <p>{cita.turno}</p>
                            </div>
                          </CitasItem>
                          <CitasItem>
                            <div className="left">
                              <FontAwesomeIcon icon={faUserMd} className='icon' />
                              <p>Doctor</p>
                            </div>
                            <div className="right">
                              <p>{cita.doctor}</p>
                            </div>
                          </CitasItem>
                        </CitasDates>
                      </CitaContainer>
                    )
                  })
                }
              </CitasContainer>
            </CitasSeccion>
          </>
      }
    </Container>
  </>)
}