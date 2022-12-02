import styled from 'styled-components'
import { ContainerW100 } from 'styles/globals/globalGrid'

export const Container = styled(ContainerW100)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`

export const ChangePage = styled.div`
  .container {
    margin-top: 0;
    display: flex;
    background-color: transparent;
    .arrow {
      svg {
        color: ${(props: any) => props.theme.colors.textBackground.main};
      }
    }
    .arrowLeft,
    .arrowRight,
    .number {
      color: #000000;
      min-width: 32.5px;
      height: 32.5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.475rem;
      cursor: pointer;
      margin-left: 2px;
      background-color: ${(props: any) => props.theme.background.secondary};
      user-select: none;
      padding: 10px;
    }
    .pagesContainer {
      display: flex;
      .ellipsis {
        margin: 0 5px;
        user-select: none;
      }
    }
    .arrowLeft:hover,
    .arrowRight:hover {
      svg {
        transition: 0.2s;
        color: ${(props: any) => props.theme.colors.solidColors.blue};
      }
      background-color: ${(props: any) => props.theme.colors.softColors.blue};
    }
    .number {
      color: ${(props: any) => props.theme.colors.textBackground.main};
      :hover {
        background-color: ${(props: any) => props.theme.colors.softColors.blue};
        color: ${(props: any) => props.theme.colors.solidColors.blue};
      }
      &.active {
        background-color: ${(props: any) =>
          props.theme.colors.solidColors.blue};
        color: #fff;
        :hover {
          background-color: ${(props: any) =>
            props.theme.colors.solidColors.blue};
          color: #fff;
        }
      }
    }
  }
`
