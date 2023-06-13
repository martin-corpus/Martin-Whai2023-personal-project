
const image='/images/users/john_doe.jpg'
const userName='Martin' 

function HiUserName() {
    return (
      <>
        <div className="userContainer">
            <div className="userCircle">
                <span className="userIcon">
                    <img src={image} alt='lego face' />
                </span>
            </div>
            <div>
                <h1 id="userName">Hi {userName}</h1>
            </div>
          </div>
      </>  
    )
  }
  
  export default HiUserName