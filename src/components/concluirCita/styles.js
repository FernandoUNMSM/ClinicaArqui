import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  display: grid;
  place-items: center;
  z-index: 1;
`
export const ConfirmContainer = styled.div`
  width: 35%;
  height: 40%;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .icon {
    font-size: 6em;
    color: ${props => props.theme.colors.primary};
  }
  h1 {
    font-size: 1.4em;
  }
  .buttons {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    button {
    background: ${props => props.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
  }
`