import styled, { css } from 'styled-components'
export const Container = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
  .label {
    font-size: 14px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: rgb(94, 98, 120);
    min-width: 80px;
    span {
      font-size: 14px;
      color: red;
      line-height: 22px;
      margin-left: 5px;
    }
  }
  margin-bottom: 10px;
`

export const OnOffButton = styled.div<{ status: boolean, disabled: boolean }>`
  height: 30px;
  width: 40px;
  background-color: #afa;
  display: flex;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  background-color: rgb(231, 80, 90);
  border-radius: 4px;
  & > div {
    width: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0);
    transition: 0.2s;
    color: white;
    p {
      text-align: center;
      font-size: 0.8em;
      text-transform: uppercase;
    }
    ${(props) => {
      if (props.status) {
        return css`
          transform: translateX(-100%);
        `
      }
    }}
  }
  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: gray!important;
        cursor: no-drop;
      `
    }
    if (props.status) {
      return css`
        background-color: rgb(50, 197, 210);
      `
    }
  }}
`
