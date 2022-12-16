
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Swal from 'sweetalert2'
import { useContext } from 'react'
import UserContext from 'context/userContext'
import PageModal from 'components/modal/pageModal'
import FormEstructure from 'components/form/formEstructure'
import SelectWithInput from 'components/form/selectWithInput'
import { useFetch, useFetching } from 'hooks/useFetching'

export default function CitaForm({ type = 'Edit', item = {}, isOpen, closeModal }: any) {
  const { userInfo } = useContext(UserContext)
  const { mutate } = item
  const { Fetch, isLoading } = useFetch()
  const [especialidad, setEspecialidad]: any = useState(null)
  const [turno, setTurno]: any = useState(null)
  const [doctor, setDoctor]: any = useState()

  const { data: doctores } = useFetching((turno && especialidad) ? `/doctor/listar/todo/${especialidad.name}/${turno.name}` : null)

  const {
    handleSubmit
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    const send: any = {
      dni_paciente: userInfo.dni,
      dni_doctor: doctor.dni,
    }

    Fetch({ url: '/cita/register', data: send })
      .then((res: any) => {
        mutate()
        if (res.success || res.sucess) {
          closeModal()
          Swal.fire({
            text: 'Cita creado!',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#a5dc86',
          })
        }
      })
  }


  return (<>
    <PageModal
      width="600px"
      title={<h2>Nueva Cita</h2>}
      closeModal={closeModal}
      isOpen={isOpen}
    >
      <FormEstructure
        onSubmit={handleSubmit(onSubmit)}
        closeModal={closeModal}
        isLoading={isLoading}>
        <SelectWithInput
          title='Especialidad'
          values={[{ name: 'ODONTOLOGIA' }, { name: 'TRAUMATOLOGIA' }, { name: 'CARDIOLOGIA' }]}
          actualValue={especialidad}
          setSelectedValue={setEspecialidad}
          required={true}
        />
        <SelectWithInput
          title='Turno'
          values={[{ name: 'MAÑANA' }, { name: 'TARDE' }, { name: 'NOCHE' }]}
          actualValue={turno}
          setSelectedValue={setTurno}
          required={true}
          toUp={true}
        />
        <SelectWithInput
          title='Doctores'
          values={(doctores && typeof doctores !== 'string') ? doctores.map((value: any) => value.doctor) : []}
          actualValue={doctor}
          setSelectedValue={setDoctor}
          required={true}
          keyword='nombre'
          toUp={true}
        />
      </FormEstructure>
    </PageModal>
  </>)
}