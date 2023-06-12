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


            <div className="companyDescriptionConatiner">

                {company ? (
                  <>
                    <img src={company.image} alt='company logo' className='soloCompanyImage'/>
                    <div className="companyLabelContainer">
                      <p><span className="label">Name</span></p>
                      <p>{company.name}</p>
                    </div>
                    <div className="companyLabelContainer">
                      <p><span className="label">Location</span></p>
                      <p>{company.location}</p>
                    </div>
                    <div className="companyLabelContainer">
                      <p><span className="label">Field</span></p>
                      <p>{company.field}</p>
                    </div>
                    <div className="companyLabelContainer">
                      <p><span className="label">Description</span></p>
                      <p>{company.description}</p>
                    </div>
                  </>
                ) : (
                  <p>Loading...</p>
                )}
           
            </div>
        </>
      )
}
  
