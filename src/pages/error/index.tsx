import { Container } from './styles'
import { useContext } from 'react'
import UserContext from 'context/userContext'

export default function ErrorPage() {
  const { logOut } = useContext(UserContext)

  const backToLogin = () => {
    logOut()
    window.location.reload()
  }

  return (<>
    <Container>
      <h2>Oops!
        <br />
        Something went wrong</h2>
      <div>
        <p>Please try logging back in by clicking:</p>
      </div>
      <div className="buttons">
        <button onClick={backToLogin}>BACK TO LOGIN</button>
      </div>
      <div>
      </div>
    </Container>
  </>)
}