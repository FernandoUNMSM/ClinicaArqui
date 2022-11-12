import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import FormTabsContainer from 'pages/FormTabsContainer'

import Clinica from 'pages/Clinica'
import ClinicaDoctor from 'pages/ClinicaDoctor'
import ClinicaAdministrador from 'pages/ClinicaAdministrador'
import Login from 'pages/Login'
import Register from 'pages/Register'
import { LanguageContext } from './context/languageContext'
import PerfilAll from 'pages/PerfilAll'
import PerfilDoctor from 'pages/PerfilDoctor'
import Administrar from 'pages/Administrar'
import AdministrarCamas from 'pages/AdministrarCamas'
import PerfilAdministrador from 'pages/PerfilAdministrador'
import Citas from 'pages/Citas'

function App() {

  return (<>
    <LanguageContext>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to='/login' />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clinica" element={<Clinica />}>
            <Route path="paciente" element={<PerfilAll />}></Route>
            <Route path="paciente/formulario" element={<FormTabsContainer />} />
            <Route path="paciente/citas" element={<Citas />} />
            <Route path="doctor" element={<PerfilDoctor />} />
            <Route path="administrador" element={<PerfilAdministrador />} />
            <Route path="administrador/camas" element={<Administrar type='Camas' />} />
            <Route path="administrador/paciente" element={<Administrar type='Paciente' />} />
            <Route path="administrador/doctor" element={<Administrar type='Personal' />} />
          </Route>
        </Routes>
      </Router>
    </LanguageContext>
  </>)
}

export default App
