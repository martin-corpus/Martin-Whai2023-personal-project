import { Link, useSearchParams } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import request from 'superagent'
import { Companies } from "../../../models/companies"
import { getCompaniesByLocation, getCompaniesByField } from "../../apiClient"

export default function UserNameSearchBody() {

  const [locationCompanies, setLocationCompanies] = useState([] as Companies[])
  const [fieldCompanies, setFieldCompanies] = useState([] as Companies[])
  const [searchParams] = useSearchParams()
  
  useEffect(() => {
    async function fetchCompanies() {
      try {

        if (searchParams.get('location')) {
          const locationCompanies = await getCompaniesByLocation(searchParams.get('location') as string)
          console.log('Location Companies:', locationCompanies)
          setLocationCompanies(locationCompanies)
        }
        if (searchParams.get('field')) {
          const fieldCompanies = await getCompaniesByField(searchParams.get('field') as string)
          console.log('Field Companies:', fieldCompanies)
          setFieldCompanies(fieldCompanies)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompanies()
  }, [searchParams])

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
