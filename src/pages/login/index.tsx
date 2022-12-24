import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from './../../context/userContext'

import Input from './../../components/form/input'
import { ButtonsContainer, ButtonSolid } from './../../styles/globals/globalButtons'
import { useFetch } from './../../hooks/useFetching'
import { Img, LoginContainer, LoginWindow } from './styles'

export default function Login({ }) {
  const { loginUser, setIsLogin } = useContext(UserContext)
  const navigate = useNavigate()
  // const [openMessage, setOpenMessage] = useState(false)
  const { Fetch, isLoading } = useFetch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any, evt: any) => {
    evt.preventDefault()
    const send = { dni: data.dni, password: data.password }
    if(send.dni === "" || send.password === "") return
    Fetch({ url: '/users/auth', data: send })
      .then((res: any) => {
        if (res.success) {
          loginUser(res.data)
          setIsLogin(true)
          navigate('/clinica')
        }
      })
  }

  /* Vista de Login
    Formulario donde el usuario va a completar sus datos*/
  return (<>
    <LoginContainer>
      <LoginWindow>
        <div className="formContainer">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputContainer">
              <Input
                title='DNI'
                named='dni'
                length='8'
                type='number'
                register={{
                  registro: register,
                  params: {}
                }}
                errors={errors}
                alt="dni"
              />
              <Input
                title='Password'
                named='password'
                type='password'
                register={{
                  registro: register,
                  params: {}
                }}
                alt="password"
                errors={errors}
              />
            </div>
            <ButtonsContainer align='center'>
              <ButtonSolid size='large' data-testid="buttonSend">Log In</ButtonSolid>
            </ButtonsContainer>
            <p>Aun no tienes cuenta? <Link to='/register'>Registrate</Link></p>
          </form>
        </div>
        <Img path='https://www.inoutviajes.com/fotos/20/15399_zzzdoctor-with-stethoscope-analyzing-patient-data-tablet-hospital-healthcare-medical-technology-concept.jpg'></Img>
      </LoginWindow>
    </LoginContainer>
  </>)
}