import { useFetching } from "hooks/useFetching";
import { Link, useNavigate } from "react-router-dom";

import ConfigContext from "context/configContext";

import PageEstructure from "components/pageEstructure";
import TableEstructure from "components/table/tableEstructure";
import { ButtonBlackSolid } from 'styles/globals/globalButtons';
import { FaRegHandPointRight } from 'react-icons/fa'

export default function PacientesList({ }) {
  const { data, mutate } = useFetching('/users/listar')

  return (<>
    <PageEstructure>
      <TableEstructure data={data}>
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