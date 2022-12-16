import { useModal } from 'hooks/useModal'
import { useRef, useEffect } from 'react'

import { SelectModalContainer, OptionsContainer } from './styles'

export default function SelectModal({
  buttonElement,
  width,
  closeOnSelect = true,
  buttonWidth = 'auto',
  toUp = false,
  disabled = false,
  children
}: any) {
  const ref: React.RefObject<any> = useRef(null)
  const [isOpen, open, close] = useModal()

  const handleClickOutside = (event: any) => {
    if (isOpen && ref.current && !ref.current.contains(event.target)) {
      close()
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isOpen])//eslint-disable-line

  return (
    <SelectModalContainer buttonWidth={buttonWidth}>
      <div onClick={disabled ? () => { } : open} style={{ width: buttonWidth }}>
        {buttonElement}
      </div>
      <OptionsContainer width={width} style={{ display: (isOpen) ? 'initial' : 'none' }} ref={ref} className={`selectModalContainer ${toUp && 'openUp'}`}>
        <div className="options" onClick={closeOnSelect ? close : null}>
          {children}
        </div>
      </OptionsContainer>
    </SelectModalContainer>
  )
}