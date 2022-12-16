import styled, { css } from 'styled-components'
import { bps } from 'styles/config/breakpoints'

const Button = styled.button<{ size?: string }>`
  outline: none;
  border: 0;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  ${(props: any) => {
    if (props.size === 'large') {
      return css`
        height: 40px;
      `
    } else if (props.size === 'medium') {
      return css`
        height: 40px;
      `
    } else if (props.size === 'small') {
      return css`
        height: 26px;
      `
    } else if (props.size === 'action') {
      return css`
        min-width: 90px;
        height: 40px;
      `
    }
  }}
  ${bps.mobile} {
    font-size: 14px;
  }
  :disabled {
    opacity: 0.5;
  }
  & > div {
    margin-left: 5px;
  }
  & > svg {
    margin-right: 5px;
  }
  :disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
  :hover{
    filter: brightness(0.9);
  }
`

export const ButtonSolid: any = styled(Button)<{ size: string }>`
  background-color: ${(props: any) => props.theme.colors.background.buttonSolid};
  color: ${(props: any) => props.theme.text.white};

  ${(props: any) => {
    if (props.active) {
      return css`
        background-color: #fff;
        color: ${(props: any) => props.theme.colors.background.buttonSolid};
        border: 2px solid ${(props: any) => props.theme.colors.background.buttonSolid};
      `
    }
  }};
`

export const ButtonLight = styled(Button)<{ size: string }>`
  background-color: ${(props: any) => props.theme.colors.background.quaternary};
  color: ${(props: any) => props.theme.colors.ui.secondary};
`

export const ButtonGrayLight = styled(Button)<{ size: string }>`
  background-color: ${(props: any) =>
    props.theme.colors.background.buttonLight};
  color: ${(props: any) => props.theme.text.grayToWhite};
`
export const ButtonRedSolid = styled(ButtonSolid)<{ size: string }>`
  background-color: #f1416c;
`
export const ButtonBlackSolid = styled(ButtonSolid)<{ size: string }>`
  background-color: #2f353b;
`
export const ButtonGreenSolid = styled(ButtonSolid)<{ size: string, active?: boolean }>`
  background-color: rgba(80, 205, 137, 1);
  ${(props: any) => {
    if (props.active) {
      return css`
        background-color: #fff;
        color: rgba(80, 205, 137, 1);
        border: 2px solid rgba(80, 205, 137, 1);
      `
    }
  }};
`

export const StatusButton = styled(ButtonSolid)<{ tipo: string }>`
  height: 26px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  min-width: fit-content;
  border-radius: 6px;
  padding: 0 11px;
  margin: auto;
  background-color: ${(props: any) => {
    if (props.tipo === 'Approved') {
      return 'rgba(80, 205, 137, 1)'
    } else if (props.tipo === 'Waiting') {
      return 'rgba(255, 199, 0, 1)'
    } else if (props.tipo === 'Wrong') {
      return 'rgba(241, 65, 108, 1)'
    }
  }};

  ::after {
    content: ${(props: any) => `'${props.tipo}'`};
  }
`

export const ButtonsContainer = styled.div<{ align?: string }>`
  display: flex;
  justify-content: ${(props: any) => props.align || 'end'};
  margin: 10px 0;
  button {
    margin-right: 10px;
    :nth-last-child(1) {
      margin-right: 0;
    }
  }
`
