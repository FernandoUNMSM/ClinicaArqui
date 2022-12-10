import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import { useFetching } from "hooks/useFetching";
import { useContext } from "react";
import UserContext from "context/userContext";

const status = ['En Curso', 'Concluida']

export default function CitasTerminadasPacienteList({ }) {
  const { userInfo } = useContext(UserContext)
  const { data, mutate } = useFetching(userInfo.dni ? `/cita/listar/paciente/${userInfo.dni}` : null)
  return (<>
    <PageEstructure>
      <TableEstructure data={typeof data === 'string' ? [] : data}>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Especialidad</th>
            <th>Turno</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            (data && typeof data !== 'string') && data.map((cita: any, index: any) => <tr key={index}>
              <td>{cita.doctor.doctor.nombre}</td>
              <td>{cita.especialidad}</td>
              <td>{cita.turno}</td>
              <td>{status[cita.status]}</td>
            </tr>
            )
          }
        </tbody>
      </TableEstructure>
    </PageEstructure>
  </>)
}