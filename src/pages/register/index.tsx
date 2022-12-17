import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from 'context/userContext'

import Input from 'components/form/input'
import { ButtonsContainer, ButtonSolid } from 'styles/globals/globalButtons'
import { TwoColums } from 'components/form/formEstructure/styles'
import { useFetch } from 'hooks/useFetching'
import { Img, LoginContainer, LoginWindow } from 'pages/login/styles'
import Swal from 'sweetalert2'

export default function Register({ }) {
  const { loginUser, setIsLogin } = useContext(UserContext)
  const navigate = useNavigate()
  const { Fetch, isLoading } = useFetch()
  const [data, setData]: any = useState({})
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = (dataForm: any) => {
    const send: any = {
      ...dataForm,
      tipoUsuario: 0,
      sexo: data.data.sexo,
      fechanac: data.data.fecha_nacimiento,
      direccion: data.data.direccion_completa
    }
    Fetch({ url: '/users/register', data: send })
      .then((res: any) => {
        if (res.success) {
          Swal.fire({
            text: 'Registro exitoso!',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#a5dc86',
          }).then(result => {
            if (result.isConfirmed) {
              loginUser(res.data)
              setIsLogin(true)
              navigate('/clinica')
            }
          })
        }
      })
  }

  const getInfoDNI: any = (e: any) => {
    const dni = e.target.value
    if (dni.length < 8) return
    Fetch({ method: 'GET', url: `/pac/${dni}` })
      .then((res: any) => {
        setData(res)
        setValue('nombre', res.data.nombres)
        setValue('apellidoP', res.data.apellido_paterno)
        setValue('apellidoM', res.data.apellido_materno)
      })
  }
  const emailRegex = /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i


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
                  length='8'
                  type='number'
                  register={{
                    registro: register,
                    params: {
                      required: 'Ingrese el dni',
                    }
                  }}
                  onChange={getInfoDNI}
                  errors={errors}
                />
                <Input
                  title='Nombre'
                  named='nombre'
                  required={true}
                  register={{
                    registro: register,
                    params: {
                      required: 'Ingrese el nombre',
                    }
                  }}
                  disabled={true}
                  errors={errors} />
                <TwoColums>
                  <Input
                    title='Apellido Paterno'
                    named='apellidoP'
                    required={true}
                    register={{
                      registro: register,
                      params: {
                        required: 'Ingrese el code',
                      }
                    }}
                    disabled={true}
                    errors={errors} />
                  <Input
                    title='Apellido Materno'
                    named='apellidoM'
                    required={true}
                    register={{
                      registro: register,
                      params: {
                        required: 'Ingrese el code',
                      }
                    }}
                    disabled={true}
                    errors={errors} />
                </TwoColums>
                <Input
                  title='Correo'
                  named='correo'
                  required={true}
                  register={{
                    registro: register,
                    params: {
                      required: 'Ingrese el code',
                      pattern: {
                        message: 'Your email may be incorrect',
                        value: emailRegex,
                      },
                    }
                  }}
                  errors={errors} />
                <Input
                  title='Contraseña'
                  named='password'
                  required={true}
                  register={{
                    registro: register,
                    params: {
                      required: 'Ingrese el code',
                    }
                  }}
                  errors={errors} />
                <Input
                  title='Confirmar constraseña'
                  named='password'
                  type='password'
                  required={true}
                  register={{
                    registro: register,
                    params: {}
                  }}
                  errors={errors}
                />
              </div>
              <ButtonsContainer align='center'>
                <ButtonSolid size='large'>Register</ButtonSolid>
              </ButtonsContainer>
              <p>¿Ya tienes una cuenta? <Link to='/login'>Logeate</Link></p>
            </form>
          </div>
        </LoginWindow>
      </LoginContainer>
    </>
  )
}