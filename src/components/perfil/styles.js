import styled from "styled-components";

export const PerfilContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  padding: 20px 30px;
  grid-template-columns: 360px 1fr;
  grid-gap: 20px;
  overflow: auto;
  position: relative;
`
export const TopPerfil = styled.div`
  display: grid;
  grid-template-rows: 140px auto;
  grid-gap: 40px;
  margin-bottom: 20px;
`

export const MiddlePerfil = styled.div`
  /* display: grid; */
  width: 100%;
`
export const MiddleContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .title {
    background-color: #E9E9E9;
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    h1 {
      text-transform: uppercase;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`

export const Info = styled.div`
  padding: 15px;
  .infoTitle {
    text-transform: uppercase;
    font-size: .5em;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
    .icon {
      margin-right: 15px;
    }
  }
  .infoContainer {
    table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
    }
    th {
      color: #78F7BD;
      text-transform: uppercase;
      font-size: .9em;
      font-weight: bold;
    }
    tr {
      height: 40px;
      border-bottom: 1px solid #ccc;
      vertical-align: middle;
    }
    .buttonConcluir {
      background-color: ${props => props.theme.colors.secondary};
      border: none;
      outline: none;
      color: #fff;
      font-size: 1.3em;
      padding: 5px 25px;
      margin: 10px 0;
      cursor: pointer;
    }
    .opciones {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .icon {
        cursor: pointer;
      }
      .icon:nth-child(1) {
        color: ${props => props.theme.colors.secondary};
      }
      .icon:nth-child(2) {
        color: red;
      }
    }
    .anadirFamiliar {
      height: 40px;
      font-size: 1.6em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-top: 10px;
    }
  }
`