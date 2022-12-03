import { useModal } from "hooks/useModal";

import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import { useFetching } from "hooks/useFetching";
import PacienteForm from "./pacienteForm";

export default function PacientesList({ }) {
  const { data, mutate } = useFetching('/users/listar')
  const [isOpen, open, close] = useModal()

  return (<>
    {isOpen && <PacienteForm type="Nuevo" item={{ mutate }} isOpen={isOpen} closeModal={close} />}
    <PageEstructure>
      <TableEstructure data={data} createButton={{ onClick: open, title: 'Paciente' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Correo</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {
            (data) && data.map((user: any, index: any) => <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.apellidoP}</td>
              <td>{user.apellidoM}</td>
              <td>{user.correo}</td>
              <td>{user.dni}</td>
            </tr>
            )
          }
        </tbody>
      </TableEstructure>
    </PageEstructure>
  </>)
}