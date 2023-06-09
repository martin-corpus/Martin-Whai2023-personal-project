import Header2 from "../header2"
import Footer from "../footer"
import UserBody from "./userSearchBody"

function UserName() {
    return (
      <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userBody">
        <UserBody />
       
      </div>
      <div className="footer">
        <Footer />
      </div>
      </>
    )
  }
  
  export default UserName