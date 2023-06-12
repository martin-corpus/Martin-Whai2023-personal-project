import { Link, useSearchParams } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { getCompanyByName } from "../../apiClient"
import { Companies } from "../../../models/companies"

export default function CompanyPageBody() {
    const [searchParams] = useSearchParams()
    const [company, setCompany] = useState<Companies | null>(null)


    useEffect(() => {
        async function fetchCompany() {
          try {
            
            if (searchParams.get('name')) {
              const company = await getCompanyByName(searchParams.get('name') as string)
              console.log('Company:', company)
              setCompany(company)
            }
          } catch (error) {
            console.log(error)
          }
        }
        fetchCompany()
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


            <div>
                <h2>Company Details</h2>
            
                {company ? (
                  <>
                    <img src={company.image} alt='company logo' className='soloCompanyImage'/>
                    <p>Name: {company.name}</p>
                    <p>Location: {company.location}</p>
                    <p>Field: {company.field}</p>
                    <p>Description: {company.description}</p>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
           
            </div>
        </>
      )
}
  
