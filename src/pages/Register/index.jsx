import React from 'react'
import {LoginContainer, LoginWindow, Img} from './../Login/styles.js'
import RegisterForm from './../../components/Register'

export default function Register ({}){
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <Img path='https://wallpaperaccess.com/full/624111.jpg'></Img>
          <RegisterForm></RegisterForm>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}