import styled, { keyframes, css } from 'styled-components'

const animation = keyframes`
  from {
    transform: translateY(8px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`

export const SelectModalContainer = styled.div<{ buttonWidth: string }>`
  position: relative;
  display: inline-flex;
  height: 100%;
  width: ${(props: any) => props.buttonWidth};
  .buttonSelectOnHeader,
  .buttonSelect,
  .buttonSelectOnTable {
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    transition: 0.2s;
    svg {
      color: ${(props: any) => props.theme.text.gray};
      font-size: 15px;
      margin-left: 5px;
    }
    p {
      font-size: 13px;
      color: ${(props: any) => props.theme.text.gray};
    }
  }
  .buttonSelectOnHeader {
    width: 50px;
    height: 100%;
    margin-right: 10px;
    display: flex;
    :hover {
      color: ${(props: any) => props.theme.colors.ui.secondary};
      background-color: ${(props: any) => props.theme.colors.hover.option};
      svg {
        color: ${(props: any) => props.theme.colors.hover.selecModalText};
      }
    }
    svg {
      margin: 0;
      font-size: 20px;
    }
  }
  .buttonSelect {
    color: rgb(161, 165, 183);
    border-radius: 6px;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    background-color: ${(props: any) => props.theme.background.secondary};
    &.quantity + div {
      top: 120%;
    }
  }
  .buttonSelectOnTable {
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    background-color: ${(props: any) => props.theme.background.gray};
    :hover {
      background-color: ${(props: any) =>
        props.theme.colors.background.quaternary};
      color: ${(props: any) => props.theme.colors.hover.selecModalText};
    }
  }
  .modalTitle {
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(239, 242, 245);
    margin-bottom: 10px;
    .userInfo {
      margin-left: 10px;
      p {
        margin: 0;
      }
    }
  }
  .buttonSelectInput {
    border: 1px solid rgb(228, 230, 239);
    color: ${(props: any) => props.theme.colors.textBackground.input};
    border-radius: 4px;
    padding: 0px 1rem;
    height: 54px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      user-select: none;
      color: rgba(97, 101, 121, 1);
      font-size: 0.9em;
    }
    &.withError {
      margin-bottom: 0;
    }
  }
  .buttonSelectWithInput.fieldsSelect{
    display: flex;
    align-items: flex-start;
    button{
      height: 54px;
      width: 100px;
      margin-left: 20px;
    }
    div{
      margin-bottom: 0;
    }
  }
`

export const OptionsContainer = styled.div<{ width: string }>`
  position: absolute;
  z-index: 230;
  right: 0;
  top: 100%;
  &.openUp {
    top: inherit;
    bottom: 100%;
  }
  animation: ${animation} 0.3s ease;
  min-width: ${(props: any) => props.width};
  border-radius: 5px;
  background-color: ${(props: any) => props.theme.background.secondary};
  .options {
    width: 100%;
    background-color: ${(props: any) => props.theme.background.secondary};
    z-index: 990;
    border-radius: 5px;
    box-shadow: ${(props: any) => props.theme.bs.optionModal};
    max-height: 265px;
    overflow: auto;
    .modalTitle {
      padding: 10px;
    }
  }
  .optionItem {
    padding: 10px 15px;
    font-size: 13px;
    cursor: pointer;
    transition: 0.1s;
    display: flex;
    align-items: center;
    user-select: none;
    color: ${(props: any) => props.theme.text.gray};
    svg {
      margin-right: 10px;
    }
    &:hover {
      background-color: ${(props: any) =>
        props.theme.colors.background.quaternary};
      color: ${(props: any) => props.theme.colors.hover.selecModalText};
    }
    &.value-selected {
      background: #f3f3f3;
      color: #35495e;
      font-weight: bold;
    }
    &.delete{
      color: rgb(231, 80, 90);
    }
    &.active{
      color: ${(props: any) =>
        props.theme.colors.background.quaternary};
      background-color: ${(props: any) => props.theme.colors.hover.selecModalText};
    }
  }
  .icon-selector {
    display: flex;
    justify-content: start;
    /* padding: 10px; */
    img {
      width: 40px;
      height: 40px;
      padding: 10px;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        background-color: ${(props: any) =>
          props.theme.colors.background.quaternary};
      }
    }
  }
`
