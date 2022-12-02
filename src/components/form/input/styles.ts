import styled, { css } from 'styled-components'

export const InputContainer = styled.div<{ error?: any; uppercase: boolean }>`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  .title {
    display: flex;
    align-items: center;
    position: relative;
    color: #ccc;
    user-select: none;
    padding: 1rem 1rem;
    pointer-events: none;
    transition: 0.3s;
    transform-origin: 0 0;
    color: rgb(94, 98, 120);
    h1 {
      font-style: normal;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
    span {
      font-size: 14px;
      color: red;
      line-height: 22px;
      margin-left: 5px;
    }
  }
  .errorText {
    font-size: 12px;
    color: ${(props) => props.theme.colors.redLight};
  }
  ${(props: any) => {
    if (props.error) {
      return css`
        margin-bottom: 0;
      `
    }
  }}
  ${(props: any) => {
    if (props.uppercase) {
      return css`
        input {
          text-transform: uppercase;
        }
      `
    }
  }}
`

export const Input = styled.input`
  color: #000;
  font-size: 0.9em;
  background: transparent;
  border: 1px solid rgb(228, 230, 239);
  color: ${(props: any) => props.theme.colors.textBackground.input};
  width: 100%;
  border-radius: 4px;
  padding: 0px 8px;
  height: 40px;
  outline: none;
`

export const InputItem = styled(Input)<{ error?: any; disabled?: boolean }>`
  height: 100%;
  position: absolute;
  top: 0;
  padding: 1.85rem 1rem 0.625rem;
  &[type='number'] {
    -webkit-appearance: textfield !important;
    margin: 0;
    -moz-appearance: textfield !important;
  }
  :focus,
  :not(:placeholder-shown) {
    & + .title {
      opacity: 0.65;
      transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    }
  }
  ${(props: any) => {
    if (props.error) {
      return css`
        border: 1px solid #f1416c;
      `
    }
  }}
  ${(props: any) => {
    if (props.disabled) {
      return css`
        background-color: #eef1f5;
        cursor: no-drop;
      `
    }
  }}
`

export const LabelError = styled.label`
  font-size: 12px;
  color: #f1416c;
  display: block;
`
