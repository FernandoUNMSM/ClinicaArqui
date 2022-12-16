import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { BiPlusMedical } from 'react-icons/bi'

import Paginator from 'components/table/paginator'
import TopManageTable from 'components/table/topManageTable'
import SpinLoader from 'components/loader/spinLoader'
import ConfigContext from 'context/configContext'

import { ButtonSolid } from 'styles/globals/globalButtons'
import { formatSnakeToNormal } from 'utilities/formatStrings'
import { TableContainer, TableSimpleContainer } from './styles'

export default function TableEstructure({ data, size = '', search = { orientation: 'horizontal', advance: false }, createButton = false, extraButtons = <></>, style = {}, children }: any) {
  const { setTotalItems } = useContext(ConfigContext)
  const { pathname }: any = useLocation()

  useEffect(() => {
    if (!data) return
    setTotalItems(data.total)
  }, [data])

  useEffect(() => {
    return () => setTotalItems(10)
  }, [])

  return (<>
    <TableContainer size={size}>
      <TopManageTable search={search}>
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
      {/* <Paginator /> */}
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