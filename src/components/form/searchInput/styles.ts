import styled, { css } from 'styled-components'
import { bps } from 'styles/config/breakpoints'

export const InputContainer = styled.div`
  height: 40px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.background.dashboard};

  border-radius: 6px;
  outline: none;

  padding: 0 10px;
  :focus {
    background: ${(props: any) => props.theme.background.inputActive};
  }
  margin-right: 10px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    color: ${(props: any) => props.theme.text.lightGray};
  }
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
  width: 250px;
  color: ${(props: any) => props.theme.text.darkGray};
  ::placeholder {
    color: ${(props: any) => props.theme.text.lightGray};
  }
`
export const ButtonSearch = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background.dashboard};
  svg {
    color: ${(props: any) => props.theme.text.lightGray};
  }
`
export const Container = styled.div<{ advance: boolean }>`
  display: flex;
  ${bps.mobile} {
    width: 100%;
    ${InputContainer} {
      width: unset;
      margin-right: 0;
    }
    ${ButtonSearch} {
      margin-left: 1rem;
    }
  }
  ${(props: any) => {
    if (props.advance) {
      return css`
        width: 100%;
        /* justify-content: space-between; */
        align-items: center;
      `
    }
  }}
`
export const AdvanceModeContainer = styled.div`
  width: 80%;
  margin-right: 20px;
  div{
    margin-bottom: 0;
  }
`
