import styled from 'styled-components'
import { bps } from 'styles/config/breakpoints'
import { ContainerMax, ContainerW100 } from 'styles/globals/globalGrid'

export const ContainerWorkspace = styled(ContainerMax)`
  height: 100vh;
  width: 100vw;
  padding: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  ${bps.tablet} {
    grid-template-columns: 1fr;
  }
  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: ${(props) => props.theme.colors.background.dashboard};
    .content {
      width: 100%;
      overflow: hidden;
    }
  }
`

export const Header = styled(ContainerW100)`
  max-width: none;
  position: sticky;
  padding: 10px 20px;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: end;
  z-index: 190;
  border-bottom: 1px solid ${(props: any) => props.theme.line.topBarDashboard};
  background-color: ${(props: any) => props.theme.background.secondary};
`
