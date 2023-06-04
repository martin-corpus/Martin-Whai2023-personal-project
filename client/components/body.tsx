
import imageUrl from '../name.png'
import { FaUser, FaBuilding } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Body() {
  return (
    <>
      <div className="name">
        <img src={imageUrl} alt="Name" id="name"/>
      </div>
      <div> 
      <p id="slogan">WHILE YOU WORK, GROOVE YOURSELF TO EMPLOYMENT. </p>
      </div> 

      <div className="loginContainer">
      {/* USER */}
          <div className="section">
            <div className="circle">
              <span className="loginIcon">
                <FaUser />
              </span>
            </div>
            
            {/* <form> */}
              <div>
                <input className="loginInput" type="email" placeholder="User Email"/>
              </div>
              <div>
                <input className="loginInput" type="password" placeholder="User Password"/>
              </div>
              <div>
                <Link to={'/username/'}>
                  <button type="submit" className="loginButton">Login</button>
                </Link>
              </div>
            {/* </form> */}

            <div>
              <button type="submit" className="joinButton">Join</button>
            </div>
          </div>

      {/* COMPANY */}
          <div className="section">
            <div className="circle">
              <span className="loginIcon">
                <FaBuilding />
              </span>  
            </div>
            
            {/* <form> */}
              <div>
                <input className="loginInput" type="email" placeholder="Company Email"/>
              </div>
              <div>
                <input className="loginInput" type="password" placeholder="Company Password"/>
              </div>
              <div>
                <button type="submit" className="loginButton">Login</button>
              </div>
            {/* </form> */}

            <div>
              <button type="submit" className="joinButton">Join</button>
            </div>
          </div>
      </div>
    </>
  )
}