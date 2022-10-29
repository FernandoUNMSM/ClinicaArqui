import styled from "styled-components";

export const InputContainerSup = styled.div`
  width: ${props => (props.apellido) ? 100 : 70}%;
  max-width: ${props => (props.apellido) ? '45%' : '100%'};
  height: 50px;
  margin-top: 20px;
  position: relative;
`

export const InputContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-top: 20px;

  :focus + label span,
  :valid + label span
  {
    color: ${props => props.theme.colors.primary};
    transform: translateY(-150%)
  }

  :focus + label::after,
  :valid + label::after
  {
    right: 0;
  }

  &.on:focus + label::before,
  &.on:valid + label::before
  {
    right: 0;
  }
`
export const Label = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #000;
  pointer-events: none;
  /* overflow: hidden; */

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  ::after {
    content: '';
    width: 100%;
    height: 3px;
    background: ${props => props.theme.colors.gradients.primary};
    position: absolute;
    bottom: -1px;
    right: 100%;
    transition: all .3s ease;
  }

  ::before {
    content: '';
    width: 100%;
    height: 3px;
    background: red;
    position: absolute;
    bottom: -1px;
    right: 100%;
    z-index: 100;
    transition: all .3s ease;
  }
`

