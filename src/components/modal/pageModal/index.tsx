import { useEffect, useRef } from "react"

import { IoMdClose } from 'react-icons/io'
import { Container, ModalContainer, ModalTitle, ModalContent } from './styles'
import ReactDOM from 'react-dom'

interface Props {
  width?: string,
  height?: string,
  title?: any,
  closeModal: any,
  isOpen: any,
  animate?: boolean,
  overflow?: string,
  children: any
}

export default function PageModal({ width = 'auto', height = 'auto', title = ' ', closeModal, isOpen, animate = true, overflow = 'auto', children }: Props) {
  const ref: React.RefObject<any> = useRef(null);


  // const handleClickOutside = (event: any) => {
  //   if (ref.current && !ref.current.contains(event.target) && event.target.tagName !== 'BUTTON') {
  //     closeModal();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [ref]);

  useEffect(() => {
    document.body.style.overflow = (isOpen) ? 'hidden' : 'auto'
  }, [isOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return ReactDOM.createPortal(
    <Container>
      <ModalContainer width={width} height={height} animate={animate} ref={ref} overflow={overflow}>
        <ModalTitle>
          {title}
          <IoMdClose onClick={closeModal} />
        </ModalTitle>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </Container>
    , document.getElementById('modal-root') as HTMLElement)
}