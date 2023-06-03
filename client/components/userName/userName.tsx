import Header from "../header"
import Footer from "../footer"
import UserBody from "./userBody"

function UserName() {
    return (
      <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <UserBody />
       
      </div>
      <div className="footer">
        <Footer />
      </div>
      </>
    )
  }
  
  export default UserName