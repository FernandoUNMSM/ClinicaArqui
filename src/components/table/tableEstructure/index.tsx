import { useLocation } from 'react-router-dom'

import { BiPlusMedical } from 'react-icons/bi'

import TopManageTable from 'components/table/topManageTable'
import SpinLoader from 'components/loader/spinLoader'

import { ButtonSolid } from 'styles/globals/globalButtons'
import { formatSnakeToNormal } from 'utilities/formatStrings'
import { TableContainer, TableSimpleContainer } from './styles'

export default function TableEstructure({ data, size = '', createButton = false, extraButtons = <></>, style = {}, children }: any) {
  const { pathname }: any = useLocation()

  return (<>
    <TableContainer size={size}>
      <TopManageTable>
        {extraButtons}
        {createButton &&
          <ButtonSolid size='action' onClick={createButton.onClick}>
            <BiPlusMedical />
            Nuevo {createButton.title || formatSnakeToNormal(pathname.split('/').at(-2).slice(0, -1))}
          </ButtonSolid>
        }
      </TopManageTable>
      <div className="table-responsive">
        <table style={style}>
          {children}
        </table>
        {!data && <div className="loaderContainer">
          <SpinLoader />
        </div>
        }
        {(data && data.length === 0) && <p className="noItems">No results</p>}
      </div>
    </TableContainer>
  </>)
}

export const TableSimpleEstructure = ({ size = '', children }: any) => {
  return <>
    <TableSimpleContainer size={size}>
      <div className="table-responsive">
        <table>
          {children}
        </table>
      </div>
    </TableSimpleContainer>
  </>
}