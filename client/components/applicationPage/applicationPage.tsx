import Header2 from "../header2"
import Footer from "../footer"
import ApplicationPageBody from "./applicationPageBody"

function ApplicationPage() {
    return (
      <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userNameSearchBody">
        <ApplicationPageBody />
       
      </div>
      <div className="footer">
        <Footer />
      </div>
      </>
    )
  }
  
  export default ApplicationPage