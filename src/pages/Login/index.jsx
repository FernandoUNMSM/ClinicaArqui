import React from 'react'
import LoginForm from './../../components/Login'
import {LoginContainer, LoginWindow, Img} from './styles.js'

export default function Login ({}){
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <LoginForm></LoginForm>
          <Img path='https://www.inoutviajes.com/fotos/20/15399_zzzdoctor-with-stethoscope-analyzing-patient-data-tablet-hospital-healthcare-medical-technology-concept.jpg'></Img>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}