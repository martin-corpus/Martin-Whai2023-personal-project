import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import request from 'superagent'
import { Companies } from "../../../models/companies"
import { getCompanies } from "../../apiClient"

export default function UserNameSearchBody() {
    const [companies, setCompanies] = useState([] as Companies[])

    useEffect(() => {
      async function fetchCompanies() {
        try {
          const companies = await getCompanies()
          setCompanies(companies)
          console.log(companies)
        } catch(error) {
          console.log(error)
        }
      }
      fetchCompanies()
    },[])

return (
    <>
      <div className="userContainer">
            <div className="userCircle">
                <span className="userIcon">
                <FaUser />
                </span>
            </div>
            <div>
                <h1 id="userName">Username</h1>
            </div>
        </div>

        
        <div className="searchResultsContainer">
          <div className="searchResultsSection">
            <h3 id="searchResultsTitle">By Location</h3>
              <div className="searchResultsRow">
                  <div className="companybox">Box 1</div>
                  <div className="companybox">Box 2</div>
                  <div className="companybox">Box 3</div>
              </div>
          </div>
        </div>

        
        <div className="searchResultsContainer">
          <div className="searchResultsSection">
            <h3 id="searchResultsTitle">By Field</h3>
              <div className="searchResultsRow">
                  <div className="companybox">Box 1</div>
                  <div className="companybox">Box 2</div>
                  <div className="companybox">Box 3</div>
              </div>
          </div>
        </div>






    <ul>
        {companies.map(({ id, image, name, field, location, description, vacancies }) => {
            return (
                <li key={id}>
                    Id: {id} <br />
                    Image: {image} <br />
                    Name: {name} <br />
                    Field: {field} <br />
                    Location: {location} <br />
                    Description: {description} <br />
                    Vacancies: {vacancies} <br />
                </li>    
            )}
        )}
    </ul>
    </>
  )
}
