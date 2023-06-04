import Header2 from "../header2"
import Footer from "../footer"
import NewUserBody from "./newUserBody"

function NewUser() {
    return (
      <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="newUserBody">
        <NewUserBody />
       
      </div>
      <div className="footer">
        <Footer />
      </div>
      </>
    )
  }
  
  export default NewUser