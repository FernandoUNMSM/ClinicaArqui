import styled, { css } from 'styled-components'
import { ContainerW100 } from 'styles/globals/globalGrid'

export const MediacodesSelectModalContainer = styled(ContainerW100)<{status: boolean}>`
  .buttonSelectWithInput {
    display: flex;
    align-items: center;
    input {
      width: 100%;
      outline: none;
      padding: 10px;
      border: 1px solid #e8e8e8;
      color: #35495e;
      text-transform: uppercase;
      font-size: 15px;
      margin-right: -30px;
      background-color: transparent;
      color: ${(props: any) => props.theme.colors.textBackground.input};
    }
    svg {
      transform: rotate(0);
      transition: 0.2s;
      ${(props) => {
        if (props.status)
          return css`
            transform: rotate(180deg);
          `
      }}
    }
  }
  .selectedValuesContainer {
    height: 300px;
    overflow: auto;
    border: 1px solid #e8e8e8;
    margin-top: 20px;
    .selectedValue {
      width: 100%;
      padding: 8px;
      height: 36px;
      font-weight: bold;
      font-size: 14px;
      line-height: 1.4;
      background-color: ${(props) => props.theme.colors.softColors.green};
      display: flex;
      :first-child {
        background-color: transparent;
        font-weight: 400;
        position: sticky;
        top: 0;
      }
      .checkboxMediacode {
        padding-right: 8px;
        width: 60px;
        display: flex;
        justify-content: center;
        .checkboxMediacodeItem {
          cursor: pointer;
          height: 18px;
          width: 18px;
          margin: 1px 0 0 !important;
          background-color: #eee;
          :hover {
            -webkit-appearance: none;
            background-color: #ccc;
          }
          :checked:hover{
            -webkit-appearance: checkbox;
          }
        }
      }
    }
    .loaderContainer {
      width: 100%;
      height: calc(100% - 36px);
      display: grid;
      place-items: center;
    }
  }
  .buttonsContainer {
    margin-top: 20px;
    .buttonRow {
      display: flex;
      :nth-child(1) {
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
      }
      :nth-child(2) {
        justify-content: end;
        padding-top: 20px;
      }
      button {
        font-weight: 500;
        background-color: #efefef;
        border-radius: 4px;
        color: #555;
        margin-right: 15px;
        &.update,
        &.delete,
        &.edit {
          color: #fff;
        }
        &.update {
          background-color: #2ea302;
          margin-right: 0;
        }
        &.delete {
          background-color: #df4740;
        }
        &.edit {
          background-color: #9198a2;
        }
        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`
