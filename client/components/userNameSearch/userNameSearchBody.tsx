import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import request from 'superagent'
import { Companies } from "../../../models/companies"
import { getCompaniesByLocation, getCompaniesByField } from "../../apiClient"

export default function UserNameSearchBody() {
  const [location, setLocation] = useState('')
  const [field, setField] = useState('')
  const [locationCompanies, setLocationCompanies] = useState([] as Companies[])
  const [fieldCompanies, setFieldCompanies] = useState([] as Companies[])

  useEffect(() => {
    async function fetchCompanies() {
      try {

        const urlParams = new URLSearchParams(window.location.search)
        const locationParam = urlParams.get('location')
        const fieldParam = urlParams.get('field')

        if (locationParam) {
          setLocation(locationParam)
        }
        if (fieldParam) {
          setField(fieldParam)
        }

        if (location) {
          const locationCompanies = await getCompaniesByLocation(location)
          console.log('Location Companies:', locationCompanies)
          setLocationCompanies(locationCompanies)
        }
        if (field) {
          const fieldCompanies = await getCompaniesByField(field)
          console.log('Field Companies:', fieldCompanies)
          setFieldCompanies(fieldCompanies)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanies()
  }, [location, field])

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

              {locationCompanies.map(({ location, image, name }) => (
                <>
                  <div className="companybox" key={location}>
                    <img src={image} alt={name} className="companyImage" />
                  </div>
                </>
              ))}

                  {/* <div className="companybox">Box 1</div>
                  <div className="companybox">Box 2</div>
                  <div className="companybox">Box 3</div> */}
              </div>
          </div>
        </div>

        
        <div className="searchResultsContainer">
          <div className="searchResultsSection">
            <h3 id="searchResultsTitle">By Field</h3>
              <div className="searchResultsRow">

              {fieldCompanies.map(({ field, image, name }) => (
                <>
                  <div className="companybox" key={field}>
                    <img src={image} alt={name} className="companyImage" />
                  </div>  
                </>
              ))}
              </div>
          </div>
        </div>
    </>
  )
}
