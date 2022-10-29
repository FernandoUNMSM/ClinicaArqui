import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

export const TitleContainer = styled.div`
  margin: 20px 0 50px 20px;
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
  width: 80%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;

`

export const BuscadorContainer = styled.div`

`

export const TablaContainer = styled.div`
  margin: 40px 0;
  overflow: hidden;
  max-height: calc(100vh - 400px);
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${props => props.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    color: ${props => props.theme.colors.primary}
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
    .button {
        background: ${props => props.theme.colors.primary};
        border: none;
        outline: none;
        color: #fff;
        padding: 10px 15px;
        font-size: 1em;
        cursor: pointer;
        width: 150px;
      }
  }
  .sexo{
    width: 100px;
    /* max-width: 100px; */
  }
  .editar, .vigencia {
    width: 160px;
  }
  .small {
    width: 160px;
  }

  thead {
    position: sticky;
    top: 0;
  }
`

export const AnadirContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .button {
    background: ${props => props.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`