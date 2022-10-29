import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FormTabsContainer from 'pages/FormTabsContainer'
import PerfilDoctor from 'pages/PerfilDoctor'
import MenuClinica from 'components/menuClinica'
import Config from 'pages/Config'

export default function ClinicaDoctor({ }) {
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
      <Switch>
        {/* <Route path="/Clinica/Formulario">
          <FormTabsContainer />
        </Route> */}
        <Route path="/Clinica/Config">
          <Config/>
        </Route>
        <Route path="/ClinicaDoctor">
          <PerfilDoctor />
        </Route>
      </Switch>
    </div>
  </>)
}