import React, { useEffect, useState } from 'react'
import PerfilComponent from 'components/perfil'
import { Container, ButtonsContainer, Button } from './styles'
import Context from '../../context/languageContext';
import { useContext } from 'react';

export default function PerfilAdministrador({ }) {
  const {language, setLanguage, texts} = useContext(Context)

  return (<>
    <Container>
      <PerfilComponent />
      {/* <ButtonsContainer>
        <div className="container">
          <Button to='/ClinicaAdministrador/AdministrarPersonal'>{texts[language].AdministrarPersonal}</Button>
          <Button to='/ClinicaAdministrador/AdministrarPacientes'>{texts[language].AdministrarPacientes}</Button>
          <Button to='/ClinicaAdministrador/AdministrarCamas'>{texts[language].AdministrarCamas}</Button>
        </div>
      </ButtonsContainer> */}
    </Container>
  </>)
}