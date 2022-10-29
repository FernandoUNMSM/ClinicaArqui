import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;

  .ContainertablaPacientes {
    width: 100%;
    overflow: auto;
    height: fit-content;
  }
  `
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  `
export const Button = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  height: 40px;
  width: 50%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  text-decoration: none;
`