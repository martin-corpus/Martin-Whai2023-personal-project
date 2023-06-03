
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
            <div>
              <input type="text" placeholder="User Name"/>
            </div>
            <div>
              <input type="password" placeholder="User Password"/>
            </div>
            <div>
              <Link to={'/username/'}>
                <button type="submit">Join</button>
              </Link>
            </div>
          </div>

      {/* COMPANY */}
          <div className="section">
            <div className="circle">
              <span className="loginIcon">
                <FaBuilding />
              </span>  
            </div>
            <div>
              <input type="text" placeholder="Company Name"/>
            </div>
            <div>
              <input type="password" placeholder="Company Password"/>
            </div>
            <div>
              <button type="submit">Join</button>
            </div>
          </div>
      </div>
    </>
  )
}