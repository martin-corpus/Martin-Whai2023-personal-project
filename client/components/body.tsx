import imageUrl from '/images/name.png'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { useAuth0 } from '@auth0/auth0-react'
import { IfNotAuthenticated } from './authenticated'

export default function Body() {
  const { loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <div className="name">
        <img src={imageUrl} alt="Name" id="name" />
      </div>
      <div>
        <p id="slogan">WHILE YOU WORK, GROOVE YOURSELF TO EMPLOYMENT. </p>
      </div>

      <div className="loginContainer">
        <div className="section">
          <div className="circle">
            <span className="loginIcon">
              <FaUser />
            </span>
          </div>

          <IfNotAuthenticated>
            <button onClick={handleSignIn} className="loginButton">
              Sign in
            </button>
          </IfNotAuthenticated>
        </div>

        <div className="section">
          <div className="circle">
            <span className="loginIcon">
              <FaBuilding />
            </span>
          </div>

          {/* <IfNotAuthenticated> onClick={handleSignIn} */}
          <button className="loginButton">Under Construction</button>
          {/* </IfNotAuthenticated> */}
        </div>
      </div>
    </>
  )
}
