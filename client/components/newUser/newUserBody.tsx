import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { NewUser } from "../../models/users"
import { addNewUser } from "../../apiClient"

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../authenticated'

function Nav() {

  const { user, logout, loginWithRedirect } = useAuth0()

  
  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <div className="centerContainer">
        <div className="newUserDiv">
          <div className="newUserCircle">
            <div className="newUserIcon">
              <FaUser />
            </div>
          </div>
          <h1 className="newUser">Welcome to Whistle!</h1>
        </div>
      </div>

      <IfAuthenticated>
          <button onClick={handleSignOut}>Sign out</button>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>

      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
      
    </>
  )
}

export default Nav