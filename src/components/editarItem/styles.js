import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  z-index: 11;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditarContainer = styled.form`
  background-color: #fff;
  width: 70%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  label {
    margin: 10px 0;
    display: block;
  }
  h1 {
    text-align: center;
  }
  .editarItem {
    width: 60%;
    position: relative;
    margin-bottom: 10px;
  }
  input[type='text'], input[type='password'] {
    display: block;
    outline: none;
    width: 100%;
    height: 30px;
    padding-left: 5px;
    border: 1px solid #ccc;
  }
  .MuiFormControl-marginNormal {
    margin: 0;
  }
  .buttons {
    display: flex;
    width: 50%;
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