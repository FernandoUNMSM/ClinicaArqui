import { useModal } from "hooks/useModal";

import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import CitaForm from "./citaForm";
import { useFetching } from "hooks/useFetching";
import { useContext } from "react";
import UserContext from "context/userContext";

const status = ['En Curso', 'Concluida']

export default function CitasList({ }) {
  const { userInfo } = useContext(UserContext)
  const { data, mutate } = useFetching('/cita/listar')
  const [isOpen, open, close] = useModal()
  return (<>
    {isOpen && <CitaForm type="Nuevo" item={{ mutate }} isOpen={isOpen} closeModal={close} />}

    <PageEstructure>
      <TableEstructure data={typeof data === 'string' ? [] : data} createButton={{ onClick: open, title: 'Cita' }}>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Especialidad</th>
            <th>Turno</th>
            <th>Paciente</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            (data && typeof data !== 'string') && data.map((cita: any, index: any) => <tr key={index}>
              <td>{cita.doctor.doctor.nombre || cita.doctor.doctor}</td>
              <td>{cita.especialidad}</td>
              <td>{cita.turno}</td>
              <td>{`${cita.paciente.nombre} ${cita.paciente.apellidoP} ${cita.paciente.apellidoM}`}</td>
              <td>{status[cita.status]}</td>
            </tr>
            )
          }
        </tbody>
      </TableEstructure>
    </PageEstructure>
  </>)
}