import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from 'pages/Home'
import LoginRegistro from 'pages/LoginRegistro'
import Clinica from 'pages/Clinica'
import ClinicaDoctor from 'pages/ClinicaDoctor'
import ClinicaAdministrador from 'pages/ClinicaAdministrador'
import { LanguageContext } from './context/languageContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Login from 'pages/Login'
import Register from 'pages/Register'

function App() {

  const [cam, cambiarFont] = useState()

  return (<>
    {/* <h1>prasddsuebaasd</h1> */}
    <LanguageContext>
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/ClinicaPaciente">
            <Clinica cambiarFont={cambiarFont}/>
          </Route>
          <Route path="/ClinicaDoctor">
            <ClinicaDoctor />
          </Route>
          <Route path="/ClinicaAdministrador">
            <ClinicaAdministrador />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </LanguageContext>
 </> )
}

export default App
