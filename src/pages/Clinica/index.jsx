import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Formulario from 'pages/Formulario'
import FormTabsContainer from 'pages/FormTabsContainer'
import MenuClinica from 'components/menuClinica'
import Citas from 'pages/Citas'
import PerfilAll from 'pages/PerfilAll'
import './styles.css'
import Config from 'pages/Config'

export default function Clinica ({cambiarFont}){
  return (<>
    <div className="clinicaContainer">
      <MenuClinica />
        <Switch>
          <Route path="/ClinicaPaciente/Config">
            <Config  cambiarFont={cambiarFont}/>
          </Route>
          <Route path="/ClinicaPaciente/Formulario">
            <FormTabsContainer />
          </Route>
          <Route path="/ClinicaPaciente/Consultas">
            <Citas />
          </Route>
          <Route path="/ClinicaPaciente">
            <PerfilAll />
          </Route>
        </Switch>
    </div>
  </>)
}