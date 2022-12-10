import { useModal } from "hooks/useModal";

import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import CitaForm from "./citaForm";
import { useFetching } from "hooks/useFetching";
import { useContext } from "react";
import UserContext from "context/userContext";
import SelectModal from "components/modal/selectModal";
import { MdKeyboardArrowDown } from "react-icons/md";

const status = ['En Curso', 'Concluida']

export default function CitasDoctoresList({ }) {
  const { userInfo } = useContext(UserContext)
  const { data, mutate } = useFetching(userInfo.dni ? `/cita/listar/doctor/${userInfo.dni}` : null)

  return (<>
    <PageEstructure>
      <TableEstructure data={typeof data === 'string' ? [] : data}>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Especialidad</th>
            <th>Turno</th>
            <th>Status</th>
            <th className='selectColumn'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            (data && typeof data !== 'string') && data.map((cita: any, index: any) => <tr key={index}>
              <td>{cita.paciente.nombre}</td>
              <td>{cita.especialidad}</td>
              <td>{cita.turno}</td>
              <td>{status[cita.status]}</td>
              <td>
                <SelectModal
                  width='120px'
                  toUp={(index >= data.length - 1) ? true : false}
                  buttonElement={<>
                    <div className="buttonSelectOnTable">
                      Actions
                      <MdKeyboardArrowDown />
                    </div>
                  </>}
                >
                  <div className="optionItem" onClick={() => ''}>Concluir</div>
                </SelectModal>
              </td>
            </tr>
            )
          }
        </tbody>
      </TableEstructure>
    </PageEstructure>
  </>)
}