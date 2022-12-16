import styled, { keyframes, css } from 'styled-components'
import { bps } from 'styles/config/breakpoints'
const animationOpenContainer = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animationOpenContainer} 0.3s ease;
  overflow: auto;
`

interface ModalContainerProps {
  width: string
  height: string
  animate: boolean
  overflow: string
}

const animationOpen = keyframes`
  0% {
    transform: translateY(-50px);
  }

  100% {
    transform: none;
  }
`

export const ModalContainer = styled.div<ModalContainerProps>`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  max-height: 90%;
  background-color: #fff;
  border-radius: 5px;
  overflow: ${(props: any) => props.overflow};
  background-color: ${(props: any) => props.theme.background.secondary};
  color: ${(props: any) => props.theme.colors.textBackground.main};
  ${bps.wide} {
    margin: 0 20px;
  }
  ${(props: any) =>
    props.animate
      ? css`
          animation: ${animationOpen} 0.5s ease;
        `
      : css`
          animation: none;
        `};
`
export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.75rem;
  border-bottom: 1px solid ${(props: any) => props.theme.line.pageModal};
  ${bps.tablet} {
    padding: 1rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }
  h3,
  h4 {
    margin: 0;
  }

  svg {
    font-size: 20px;
    cursor: pointer;
    color: #ccc;
    transition: 0.3s;

    :hover {
      color: ${(props: any) => props.theme.colors.ui.secondary};
    }
  }
  .buttonsContainer {
    display: flex;
    button {
      border-radius: 5px;
    }
    button:nth-last-child(1) {
      margin-left: 20px;
    }
  }
`
export const ModalContent = styled.div`
  padding: 10px 20px;
`
