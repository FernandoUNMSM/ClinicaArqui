import React from 'react'
import PerfilAdministrador from 'pages/PerfilAdministrador'
import MenuClinica from 'components/menuClinica'
import Administrar from 'pages/Administrar'
import AdministrarCamas from 'pages/AdministrarCamas'

export default function ClinicaAdministrador({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      {/* <Switch>
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

      </Switch> */}
    </div>
  </>)
}