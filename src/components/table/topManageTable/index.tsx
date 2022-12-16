import { ManageContainer } from './styles'
import QuantityRowsSelector from 'components/table/quantityRowsSelector'

export default function TopManageTable({ search, children }: any) {
  return (<>
    <ManageContainer orientation={search.orientation}>
      <div className="leftManage">
        {children}
      </div>
      <div className="rigthManage">
      </div>
    </ManageContainer>
  </>)
}