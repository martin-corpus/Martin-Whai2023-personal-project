import Header2 from '../header2'
import Footer from '../footer'
import UserNameBody from './userNameBody'

function UserName() {
  return (
    <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userNameBody">
        <UserNameBody />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default UserName
