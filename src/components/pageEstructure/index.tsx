import Breadcrumb from './../breadcrumb'
import { ContainerW100 } from './../../styles/globals/globalGrid'

export default function PageEstructure({ children }: any) {
  return (<>
    <ContainerW100>
      <Breadcrumb />
      {children}
    </ContainerW100>
  </>)
}