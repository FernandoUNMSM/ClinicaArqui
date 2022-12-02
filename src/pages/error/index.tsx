import { Container } from "./styles";
import { useContext } from "react";
import UserContext from "context/userContext";

export default function ErrorPage() {
  const { logOut } = useContext(UserContext)

  const backToLogin = () => {
    logOut()
    window.location.reload()
  }

  return (<>
    <Container>
      {/* <img src="https://dev.confielms.com/themes/metronic1/assets/pages/img/login/logo.png" alt="PURLs logo" /> */}
      <h2>Oops!
        <br />
        Something went wrong</h2>
      <div>
        {/* <p>It looks like you've reached an older version of the Confie application</p> */}
        <p>Please try logging back in by clicking:</p>
      </div>
      <div className="buttons">
        <button onClick={backToLogin}>BACK TO LOGIN</button>
      </div>
      <div>
        {/* <p>If the problem still persists please contact us by email: support@confiepurls.com</p> */}
      </div>
    </Container>
  </>)
}