import Header2 from '../header2'
import Footer from '../footer'
import VacancyPageBody from './vacancyPageBody'

function VacancyPage() {
  return (
    <>
      <div className="header2">
        <Header2 />
      </div>
      <div className="userNameSearchBody">
        <VacancyPageBody />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default VacancyPage
