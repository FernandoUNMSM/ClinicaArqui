import styled, { css } from 'styled-components'
import { bps } from 'styles/config/breakpoints'

export const ProfileContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

interface TabsContainerProps {
  status: boolean
}

export const TabsContainer = styled.div<TabsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .tabs {
    display: flex;
    div {
      transition: 0.2s color;
      cursor: pointer;
      padding: 12px 13px 13px;
      p {
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
  ${(props: any) => {
    return props.status
      ? css`
          .Information {
            border-bottom: 4px solid ${(props) => props.theme.colors.ui.secondary};
          }
        `
      : css`
          .password {
            border-bottom: 4px solid ${(props) => props.theme.colors.ui.secondary};
          }
        `
  }}

  ${bps.mobile} {
    div:nth-child(1) {
      margin-left: 0;
    }
    div:nth-child(2) {
      margin: 0;
    }
    p {
      margin-top: 0;
    }
  }
`

export const ContentTabProfile = styled.div`
  padding-bottom: 10px;
  form{
    margin-bottom: 20px;
  }
`
