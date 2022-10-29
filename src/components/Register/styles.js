import styled, { keyframes } from 'styled-components'
import { Form, Input, FormContainer, Title, InputContainer, Button } from './../Login/styles'

export const InputRegisterContainer = styled(InputContainer)`
  height: fit-content;
  p {
  color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`

export const Apellidos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ApellidosContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`
const showMessage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const MessageError = styled.div`
  position: absolute;
  /* top: 0; */
  z-index: 12;
  left: 50%;
  bottom: -102%;
  height: 40px;
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.primary};
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  transform-style: preserve-3d;
  transition: .3s;
  animation: ${showMessage} .1s linear;
  ::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${props => props.theme.colors.primary};
    position: absolute;
    top: 0;
    background-color: #fff;
    transform: rotate(45deg) translateY(-50%) translateZ(-1px);
  }
  p {
    color: ${props => props.theme.colors.primary};
    font-size: .7em;
    text-align: center;
  }
`