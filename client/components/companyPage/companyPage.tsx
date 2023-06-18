import Header2 from '../header2'
import Footer from '../footer'
import CompanyPageBody from './companyPageBody'

function CompanyPage() {
  return (
    <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userNameSearchBody">
        <CompanyPageBody />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default CompanyPage
