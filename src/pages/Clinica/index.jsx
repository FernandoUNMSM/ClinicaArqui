import React, {useEffect} from 'react'
import FormTabsContainer from 'pages/FormTabsContainer'
import MenuClinica from 'components/menuClinica'
import Citas from 'pages/Citas'
import PerfilAll from 'pages/PerfilAll'
import './styles.css'
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Clinica() {
  const tipo = JSON.parse(localStorage.getItem('usuario')).tipoUsuario
  const navigate = useNavigate()
  useEffect(() => {
    if (tipo === 0) {
      navigate('/clinica/paciente')
    }
    else if (tipo === 1) {
      navigate('/clinica/doctor')
    }
    else if (tipo === 2) {
      navigate('/clinica/administrador')
    }
  }, [tipo])

  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <div className="content">
        <Outlet />
      </div>
      {/* <Switch>
        <Route path="/ClinicaPaciente/Formulario">
          <FormTabsContainer />
        </Route>
        <Route path="/ClinicaPaciente/Consultas">
          <Citas />
        </Route>
        <Route path="/ClinicaPaciente">
          <PerfilAll />
        </Route>
      </Switch> */}
    </div>
  </>)
}