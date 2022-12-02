import styled from 'styled-components'
import { ContainerW100 } from 'styles/globals/globalGrid'

export const Container = styled(ContainerW100)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: auto;
  img {
    margin-bottom: 20px;
  }
  h2 {
    // font-size: 14px;
    margin: 20px 0;
    font-weight: 600;
    text-align: center;
  }
  .buttons {
    margin: 30px 0;
    button {
      border: none;
      outline: none;
      cursor: pointer;
      padding: 10px 20px;
      color: #fff;
      background-color: #1e56a0;
      border-radius: 5px;
      font-family: 'Poppins';
      font-weight: bold;
    }
  }
`
