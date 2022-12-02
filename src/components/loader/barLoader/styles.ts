import styled, { keyframes } from 'styled-components'

export const animation = keyframes`
  0%{
    height: 80px;
  }
  50%{
    height: 40px;
  }
  100%{
    height: 80px;
  }
`

export const BarLoaderContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(5, 10px);
  align-items: center;
  gap: 10px;
  .bar {
    height: 80px;
    background-color: ${(props: any) => props.theme.colors.textBackground.main};
    animation: ${animation} 1.2s infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
  }
`
