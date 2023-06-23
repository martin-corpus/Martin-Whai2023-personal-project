import imageUrl from '/images/whistle.png'
import { IfAuthenticated } from './authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header2() {
  const { logout } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  return (
    <header>
      <div className="headerContainer">
        <a href="/home" id="Logo">
          <div className="logoContainer">
            <img src={imageUrl} alt="Whistle Company Logo" id="logo" />
            <span id="headerHome">Home</span>
          </div>
        </a>
        <div className="headerLogOut">
          <IfAuthenticated>
            <button onClick={handleSignOut}>Sign out</button>
          </IfAuthenticated>
        </div>
      </div>
    </header>
  )
}
