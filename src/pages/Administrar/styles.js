import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  z-index: 10;
`

export const TitleContainer = styled.div`
  margin: 20px 0 20px 20px;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.primary};
  h1 {
    line-height: 50px;
    font-size: 2.4em;
  }
  .icon {
    font-size: 3em;
    margin-right: 20px;
    color: ${props => props.theme.colors.primary};
  }
`

export const PacienteContainer = styled.div`
  width: 90%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;
  place-items: center;
`

export const BuscadorContainer = styled.div`
width: 100%;
  input {
    width: 200px;
  }
`

export const TablaContainer = styled.div`
  overflow: auto;
  max-height: calc(100vh - 300px);
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  width: 100%;
  /* height: 100%; */
  .pacienteContainer {
    justify-self: center;
    width: 230px;
    /* height: 250px; */
    /* margin: 20px 10px 0 10px; */
    margin-top: 10px;
    background-color: #afa;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    background-color: #fff;
    border-radius: 10px;
    transition: .3s;
    /* padding: 10px 15px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    /* height: fit-content; */
    .pacienteInfo {
      margin: 20px 10px;
    }
    .infoItem {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      margin-bottom: 10px;
      p:first-child {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  .pacienteOpciones {
    h1 {
      margin-left: 10px;
      font-size: 1.2em;
      text-transform: uppercase;
      color: ${props => props.theme.colors.primary};
    }
  }
  .opcion {
    cursor: pointer;
    display: flex;
    padding: 10px 10px;
    transition: .3s;
    .icon {
      width: 20px;
      margin: 0 10px 0 0;
      color: ${props => props.theme.colors.primary};
      pointer-events: none;
      font-size: 1.1em;
    }
    p {
      pointer-events: none;
    }
    &:hover {
      background-color: #ccc;
    }
  }
`

export const AnadirContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    background: ${props => props.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`