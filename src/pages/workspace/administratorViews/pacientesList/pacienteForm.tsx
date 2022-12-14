
import { SubmitHandler, useForm } from 'react-hook-form'

import Swal from 'sweetalert2'

import PageModal from 'components/modal/pageModal'
import Input from 'components/form/input'
import FormEstructure from 'components/form/formEstructure'
import { useFetch } from 'hooks/useFetching'

export default function PacienteForm({ type = 'Edit', item = {}, isOpen, closeModal }: any) {
  const { mutate } = item
  const { Fetch, isLoading } = useFetch()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    const send: any = {
      ...data,
      tipoUsuario: 0
    }
    Fetch({ url: '/users/register', data: send })
      .then((res: any) => {
        mutate()
        if (res.success) {
          closeModal()
          Swal.fire({
            text: 'Paciente creado!',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#a5dc86',
          })
        }
      })
  }

  const getInfoDNI: any = (e: any) => {
    const dni = e.target.value
    if (dni.length < 8) return
    Fetch({ method: 'GET', url: `/pac/${dni}` })
      .then((res: any) => {
        setValue('nombre', res.data.nombres)
        setValue('apellidoP', res.data.apellido_paterno)
        setValue('apellidoM', res.data.apellido_materno)
        setValue('sexo', res.data.sexo)
        setValue('fechanac', res.data.fecha_nacimiento)
        setValue('direccion', res.data.direccion_completa)
      })
  }

  const emailRegex = /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i

  return (<>
    <PageModal
      width="600px"
      title={<h2>Nuevo Paciente</h2>}
      closeModal={closeModal}
      isOpen={isOpen}
    >
      <FormEstructure
        onSubmit={handleSubmit(onSubmit)}
        closeModal={closeModal}
        isLoading={isLoading}>
        <Input
          title='DNI'
          named='dni'
          type='number'
          length='8'
          required={true}
          register={{
            registro: register,
            params: {
              required: 'Ingrese el dni',
            }
          }}
          errors={errors}
          onChange={getInfoDNI}
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
        <Input
          title='Fecha de Nacimiento'
          named='fechanac'
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
          title='Sexo'
          named='sexo'
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
          title='Direccion'
          named='direccion'
          required={true}
          register={{
            registro: register,
            params: {
              required: 'Ingrese el name',
            }
          }}
          disabled={true}
          errors={errors} />
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
          title='Contrase??a'
          named='password'
          required={true}
          register={{
            registro: register,
            params: {
              required: 'Ingrese el code',
            }
          }}
          errors={errors} />
      </FormEstructure>
    </PageModal>
  </>)
}