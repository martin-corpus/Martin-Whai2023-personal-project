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
