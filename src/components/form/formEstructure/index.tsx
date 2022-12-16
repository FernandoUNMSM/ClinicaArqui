import { ButtonGrayLight, ButtonSolid, ButtonsContainer } from './../../../styles/globals/globalButtons'
import SpinLoader from './../../loader/spinLoader'
import { Form } from './styles'

export default function FormEstructure({ onSubmit, closeModal, isLoading, extraButtons = <></>, disabled = false, children }: any) {
  return (
    <Form onSubmit={onSubmit}>
      <div className="contentForm">
        {children}
      </div>
      <ButtonsContainer>
        {extraButtons}
        <ButtonGrayLight size='medium' onClick={closeModal} type='button'>Close</ButtonGrayLight>
        {!disabled &&
          <ButtonSolid size='medium' type='submit'>
            <span>Submit</span>
            {isLoading && <SpinLoader width='15px' />}
          </ButtonSolid>
        }
      </ButtonsContainer>
    </Form>
  )
}