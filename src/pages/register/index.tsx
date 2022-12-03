import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import UserContext from "context/userContext";

import Input from "components/form/input";
import { ButtonsContainer, ButtonSolid } from "styles/globals/globalButtons";
import { TwoColums } from 'components/form/formEstructure/styles';
import { useFetch } from "hooks/useFetching";
import { Img, LoginContainer, LoginWindow } from "pages/login/styles";

export default function Register({ }) {
  const { loginUser, setIsLogin } = useContext(UserContext)
  const navigate = useNavigate()
  const [openMessage, setOpenMessage] = useState(false)
  const { Fetch, isLoading } = useFetch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // setOpenMessage(false)
    // Fetch({ url: '/heimdall/login', data: { email: data.email, password: data.password } })
    //   .then((res: any) => {
    //     if (res.success) {
    //       loginUser(res.data)
    //       setIsLogin(true)
    //       navigate('/workspace')
    //     } else {
    //       setOpenMessage(true)
    //     }
    //   })
  };
  return (
    <>
      <LoginContainer>
        <LoginWindow>
          <Img path='https://wallpaperaccess.com/full/624111.jpg'></Img>
          <div className="formContainer">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputContainer">
                <Input
                  title='DNI'
                  named='dni'
                  type='number'
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
                <Input
                  title='Nombre'
                  named='nombre'
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
                <TwoColums>
                  <Input
                    title='Apellido Paterno'
                    named='nombre'
                    register={{
                      registro: register,
                      params: {}
                    }}
                    errors={errors}
                  />
                  <Input
                    title='Apellido Materno'
                    named='nombre'
                    register={{
                      registro: register,
                      params: {}
                    }}
                    errors={errors}
                  />
                </TwoColums>
                <Input
                  title='Email'
                  named='email'
                  type='email'
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
                <Input
                  title='Password'
                  named='password'
                  type='password'
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
                <Input
                  title='Confirmar constraseña'
                  named='password'
                  type='password'
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
              </div>
              <ButtonsContainer align='center'>
                <ButtonSolid size='large'>Log In</ButtonSolid>
              </ButtonsContainer>
              <p>¿Ya tienes una cuenta? <Link to='/login'>Logeate</Link></p>
            </form>
          </div>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}