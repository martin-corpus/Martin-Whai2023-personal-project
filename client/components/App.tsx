import { Outlet } from 'react-router-dom'
import Header from "./header"
import Body from "./body"
import Footer from "./footer"

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Body />
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>  
  )
}

export default App
