import styled, {keyframes} from 'styled-components'

export const animation = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`

export const SpinContainer = styled.div<{color: string, width: string}>`
  /* margin-right: 5px; */
  .spin {
    width: ${props => props.width};
    height: ${props => props.width};
    border-radius: 50%;
    border: 2px solid ${props => props.color};
    border-top-color: transparent;
    animation: ${animation} 1s infinite linear;
  }
`

