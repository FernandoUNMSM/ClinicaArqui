import styled, {keyframes} from 'styled-components';
import { bps } from 'styles/config/breakpoints'

const backgroundtransition = keyframes`
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
`

export const LoginContainer = styled.div`
  background: ${(props: any) => props.theme.colors.gradients.primary};
  background-size: 700%;
  background-position: left;
  height: 100vh;
  position: relative;
  width: 100vw;
  animation: ${backgroundtransition} infinite 3s alternate;
  display: flex;
  align-items: center;
  justify-content: center;
  .formContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    form{
      width: 90%;
      p{
        font-size: 12px;
        text-align: center;
      }
      .inputContainer{
        margin-bottom: 50px;
      }
    }
  }
`
export const LoginWindow = styled.div`
  background-color: #fff;
  height: 80%;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute; */
  min-width: 75%;
  overflow: auto;
  width: 1200px;
  margin: 0 30px;
  display: grid;
  grid-template-columns: 40% 1fr;

  ${bps.mobile} {
    display: initial;
  }
`
export const Img = styled.div`
  ${(props: any) =>  `background-image: url('${props.path}');`}
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${bps.mobile} {
    display: none;
  }
`