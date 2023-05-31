
import imageUrl from '../name.png'

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
              <img src="user-logo.png" alt="User Logo"/>
            </div>
            <div>
              <input type="text" placeholder="User Name"/>
            </div>
            <div>
              <input type="password" placeholder="Password"/>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>

      {/* COMPANY */}
          <div className="section">
            <div className="circle">
              <img src="company-logo.png" alt="Company Logo"/>
            </div>
            <div>
              <input type="text" placeholder="Company Name"/>
            </div>
            <div>
              <input type="password" placeholder="Password"/>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
      </div>
    </>
  )
}