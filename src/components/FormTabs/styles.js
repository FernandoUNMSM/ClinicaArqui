import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 30px 0;
  div {
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    button {
      /* width: 150px; */
      border: none;
      color: #fff;
      padding: 5px 30px;
      cursor: pointer;
      font-size: 1.3em;
      :nth-child(1) {
        background-color: #ccc;
      }
      :nth-child(2) {
        background-color: ${props => props.theme.colors.secondary};
      }
    }
  }
`