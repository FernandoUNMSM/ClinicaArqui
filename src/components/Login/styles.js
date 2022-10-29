import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const Title = styled.h1`
  margin: 0;
  width: fit-content;
  font-size: 2.5em;
  color: transparent;
  background: ${props => props.theme.colors.gradients.primary_reverse};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 180px;
  width: 100%;
`

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* margin: auto; */
  padding: 0 30px;
`
export const Input = styled.input`
  width: 70%;
  min-width: 200px;
  height: 35px;
  margin-top: 20px;
  outline: none;
  padding: 0 5px;
  font-size: .8em;
`
export const Button = styled.button`
  outline: none;
  border: none;
  background: ${props => props.theme.colors.gradients.primary};
  width: 150px;
  height: 40px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
`