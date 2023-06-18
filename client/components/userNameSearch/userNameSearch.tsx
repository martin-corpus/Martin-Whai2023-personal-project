import Header2 from '../header2'
import Footer from '../footer'
import UserNameSearchBody from './userNameSearchBody'

function UserNameSearch() {
  return (
    <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userNameSearchBody">
        <UserNameSearchBody />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default UserNameSearch
