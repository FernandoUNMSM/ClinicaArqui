import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, TablaContainer } from './styles'
import Tabla from 'components/Tabla'
import getCitas from 'services/getCitas.js'
import terminarCita from 'services/terminarCita'
import Context from '../../context/languageContext';
import { useContext } from 'react';

export default function PerfilDoctor({ }) {
  const [citas, setCitas] = useState([])
  const {language, setLanguage, texts} = useContext(Context)
  const concluirCita = (idCita) => {
    setCitas((prev) => prev.filter(el => el.idCita !== idCita))
    terminarCita({idCita})
  }

  useEffect(()=> {
    getCitas()
      .then(setCitas)
  },[])

  return (<>
    <Container>
      <PerfilComponent />
    </Container>
  </>)
}
      // <TablaContainer>
      //   <div className="ContainertablaPacientes">
      //     <Tabla>
      //       <div className="tablaDoctores">
      //         <table>
      //           <thead>
      //             <tr>
      //               <th>{texts[language].Fecha}</th>
      //               <th>{texts[language].Horario}</th>
      //               <th>{texts[language].Paciente}</th>
      //               {/* <th className="selecc">Perfil</th> */}
      //               <th>{texts[language].Concluir}</th>
      //             </tr>
      //           </thead>
      //           <tbody>
      //             {
      //               citas.map(cita =>
      //                 <tr key={cita.idCita}>
      //                   <td>{cita.fecha}</td>
      //                   <td>{cita.turno}</td>
      //                   <td>{cita.paciente}</td>
      //                   {/* <td>
      //                     <button>Ver Perfil</button>
      //                   </td> */}
      //                   <td>
      //                     <button onClick={() => concluirCita(cita.idCita)}>Concluir</button>
      //                   </td>
      //                 </tr>
      //               )
      //             }
      //           </tbody>
      //         </table>
      //       </div>
      //     </Tabla>
      //   </div>
      // </TablaContainer>