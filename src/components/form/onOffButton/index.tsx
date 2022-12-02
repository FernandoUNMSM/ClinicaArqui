import { useEffect, useState } from 'react'
import { Container, OnOffButton as OnOffButtonStyled } from './styles'

export default function OnOffButton({ title = '', value = false, setValue, required = false, disabled = false }: any) {
  const [status, setStatus] = useState(value)

  useEffect(() => {
    setValue(status)
  }, [status])

  const handleStatus = () => {
    if(disabled) return
    setStatus(!status)
  }

  return (<>
    <Container>
      <div className="label">
        <p>{title}
          {required && <span>*</span>}
        </p>
      </div>
      <OnOffButtonStyled status={status} onClick={handleStatus} disabled={disabled}>
        <div className="off">
          <p>Off</p>
        </div>
        <div className="on">
          <p>On</p>
        </div>
      </OnOffButtonStyled>
    </Container>
  </>)
}