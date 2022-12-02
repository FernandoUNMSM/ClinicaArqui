import { useFetching } from "hooks/useFetching";
import { useModal } from "hooks/useModal";

import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import DoctorForm from "./doctorForm";

export default function DoctoresList({ }) {
  const { data, mutate } = useFetching('/doctor/listar')
  const [isOpen, open, close] = useModal()

  return (<>
    {isOpen && <DoctorForm type="Nuevo" item={{ mutate }} isOpen={isOpen} closeModal={close} />}

    <PageEstructure>
      <TableEstructure data={data} createButton={{ onClick: open, title: 'Doctor' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Correo</th>
            <th>DNI</th>
            <th>Especialidad</th>
            <th>Turno</th>
          </tr>
        </thead>
        <tbody>
          {
            (data) && data.map((doctor: any, index: any) => <tr key={index}>
              <td>{doctor.doctor.nombre}</td>
              <td>{doctor.doctor.apellidoP}</td>
              <td>{doctor.doctor.apellidoM}</td>
              <td>{doctor.doctor.correo}</td>
              <td>{doctor.doctor.dni}</td>
              <td>{doctor.especialidad}</td>
              <td>{doctor.turno}</td>
            </tr>
            )
          }
        </tbody>
      </TableEstructure>
    </PageEstructure>
  </>)
}