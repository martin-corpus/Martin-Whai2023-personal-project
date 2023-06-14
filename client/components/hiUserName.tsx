import { useAuth0 } from '@auth0/auth0-react'
const image='/images/users/john_doe.jpg'


function HiUserName() {
  const { user } = useAuth0()

    return (
      <>
        <div className="userContainer">
            <div className="userCircle">
                <span className="userIcon">
                    <img src={image} alt='lego face' />
                </span>
            </div>
            <div>
              {user && <h1 id="userName">Hi {user?.nickname}</h1>}
            </div>
          </div>
      </>  
    )
  }
  
  export default HiUserName

