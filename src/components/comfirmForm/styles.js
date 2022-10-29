import styled from "styled-components";

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const ConfirmSubContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 30px 20px;
`
export const ConfirmTitle = styled.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
    /* font-weight: bold; */
    background: ${props => props.theme.colors.gradients.primary_reverse};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`
export const ConfirmDates = styled.div`
  width: 70%;
  margin: auto;
`
export const ConfirmButton = styled.div`
  text-align: center;
  button {
    background: ${props => props.theme.colors.gradients.primary};
    padding: 10px 40px;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }

`
export const ConfirmItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  .left {
    display: flex;
    align-items: center;
    font-size: .9em;
    /* color: ${props => props.theme.colors.primary}; */
    p {
      font-weight: 600;
    }
  }
  .icon {
    font-size: 2em;
    margin-right: 20px;
    width: 28px;
  }
  .right p {
    font-size: .9em;
    :first-letter {
      text-transform: uppercase;
    }
  }
`