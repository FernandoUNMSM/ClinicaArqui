import styled from "styled-components";

export const FormularioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  .select {
    width: 100%;
    height: fit-content;
  }
`
export const Derecha = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .inputInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    width: 60%;
  }
`
export const Izquierda = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  .extraInfo {
    display: flex;
    width: 60%;
    height: 70%;
    flex-direction: column;
    justify-content: space-evenly;
  }
  textarea {
    border: 1px solid #ccc;
    height: 80%;
    outline: none;
    padding: 10px 5px;
    font-size: 1em;
    resize: none;
  }
`
export const Centro = styled.div`

  span {
    height: 100%;
    width: 1px;
    background: ${props => props.theme.colors.gradients.primary};
    display: block;
    margin: auto;
  }
`