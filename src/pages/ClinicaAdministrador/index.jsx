import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PerfilAdministrador from 'pages/PerfilAdministrador'
import MenuClinica from 'components/menuClinica'
import Administrar from 'pages/Administrar'
import AdministrarCamas from 'pages/AdministrarCamas'
import Config from 'pages/Config'

export default function ClinicaAdministrador({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <Switch>
        <Route path="/Clinica/Config">
          <Config/>
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarCamas">
          <Administrar type='Camas'/>
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarPacientes">
          <Administrar type='Paciente'/>
        </Route>
        <Route path="/ClinicaAdministrador/AdministrarPersonal">
          <Administrar type='Personal'/>
        </Route>
        <Route path="/ClinicaAdministrador">
          <PerfilAdministrador/>
        </Route>
        {/* <Route path="/Clinica/Formulario">
          <FormTabsContainer />
        </Route> */}
      </Switch>
    </div>
  </>)
}