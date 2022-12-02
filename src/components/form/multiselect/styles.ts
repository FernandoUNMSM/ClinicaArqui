import { ContainerW100 } from '../../../styles/globals/globalGrid'
import styled from 'styled-components'

export const Multiselect = styled(ContainerW100)`
  display: flex;
  height: auto;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
  .assignSelectContainer{
    width: 50%;
  }
  .select {
    border-radius: 4px;
    width: 100%;
    background-color: ${(props: any) => props.theme.colors.background.input};
    background: transparent;
    border: 1px solid rgb(228, 230, 239);
  }
  .select {
    margin-top: 5px;
    height: 250px;
    overflow: auto;
    &-option {
      padding: 10px;
      cursor: pointer;
      color: rgba(97, 101, 121, 1);
      display: flex;
      align-items: center;
      border-radius: 0;
      font-size: 13px;
      user-select: none;
      p {
        margin: 0;
        pointer-events: none;
      }
      :hover {
        background-color: ${(props: any) =>
          props.theme.colors.hover.selectOption};
      }
    }
  }
  .changeIcon {
    margin: 0 20px;
  }
  .containerLoader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
