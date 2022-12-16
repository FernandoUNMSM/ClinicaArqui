import { ManageContainer } from './styles'
import QuantityRowsSelector from 'components/table/quantityRowsSelector'
import SearchInput from 'components/form/searchInput'

export default function TopManageTable({ search, children }: any) {
  return (<>
    <ManageContainer orientation={search.orientation}>
      <div className="leftManage">
        {children}
      </div>
      <div className="rigthManage">
        {/* <SearchInput search={search} /> */}
      </div>
    </ManageContainer>
  </>)
}