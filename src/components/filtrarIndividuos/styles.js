import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`
const left = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`
const right = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
`
export const FiltrarItem = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  input[type='text'] {
    border: 1px solid ${props => props.theme.colors.primary};
    outline: none;
    padding: 5px;
    font-size: 1em;
  }
`
export const RadioContainer = styled.div`
  position: relative;
  width: 80px;
  height: 40px;
  input[type='radio'] {
    width: 100%;
    height: 100%;
    transition: .3s;
    cursor: pointer;
  }
  input[type='radio']#dni:checked + .dni::after {
    display: block;
    animation: ${right} .3s ease;
  }
  input[type='radio']#nombre:checked + .nombre::after {
    display: block;
    animation: ${left} .3s ease;
  }
`

export const SubContainer = styled.div`
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  position: relative;
  margin-right: 40px;
  /* :focus-within {
    &::after{
    background-color: #000;
    }
  } */
`

export const RadioInfo = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  p {
    pointer-events: none;
    z-index: 12;
  }

  &.nombre::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
  background-color: ${props => props.theme.colors.primary};
    display: none;
    top: 0;
    left: 0;
    /* left: 100%; */
  }
  &.dni::after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
  background-color: ${props => props.theme.colors.primary};
    display: none;
    top: 0;
    left: 0;
    z-index: 10;
    /* left: 100%; */
  }
`
