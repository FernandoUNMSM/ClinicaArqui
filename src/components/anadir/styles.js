import styled from "styled-components";
import {MessageError as Error} from 'components/Register/styles'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
export const AnadirContainer = styled.div`
  width: 800px;
  /* height: 500px; */
  background-color: #fff;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-top: 10px;
  overflow: auto;
  max-height: calc(100vh - 100px);
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 0 20px;
  color: ${props => props.theme.colors.primary};
  .icon {
    font-size: 2.5em;
    cursor: pointer;
  }
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  form {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    label {
      margin: 10px 0;
      display: block;
    }
    input[type='text'], input[type='password'] {
      display: block;
      outline: none;
      width: 100%;
      height: 30px;
      padding-left: 5px;
      border: 1px solid #ccc;
    }
    .buttons {
      display: flex;
    }
    .button {
      width: 150px;
      background-color: ${props => props.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 8px 0px;
      cursor: pointer;
      margin: 20px auto;
      font-size: 1.3em;
    }
    h2 {
      margin-top: 10px;
    }
    .MuiFormControl-marginNormal {
      margin: 0;
    }
    .select {
      width: 100%;
      height: fit-content;
      position: relative;
    }
    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .buttonc {
      margin: 30px auto;
    }
  }
  .formItem {
    margin-bottom: 10px;
    position: relative;
  }
`
export const MessageError = styled(Error)`
  bottom: -75%;
  z-index: 111;
`