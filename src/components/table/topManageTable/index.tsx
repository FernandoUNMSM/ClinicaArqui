import { ManageContainer } from './styles'

export default function TopManageTable({ children }: any) {
  return (<>
    <ManageContainer>
      <div className="leftManage">
        {children}
      </div>
      <div className="rigthManage">
      </div>
    </ManageContainer>
  </>)
}