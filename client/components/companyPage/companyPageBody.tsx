import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCompanyByName, getVacanciesByCompanyId } from "../../apiClient"
import { Companies } from "../../../models/companies"
import  HiUserName  from '../../components/hiUserName'
import { useQuery } from '@tanstack/react-query'

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

      // REACT QUERY FOR VACANCIES

      const companyId = Number(company?.id) // companyId = NaN

      const vacanciesQuery = useQuery(['vacancies', companyId], () => getVacanciesByCompanyId(companyId))

      console.log(vacanciesQuery.data)
      console.log(vacanciesQuery.error)

      return (
        <>
          <HiUserName />

          {!!company?.vacancies && (
            <div className="vacancyContainer">
              <div className="vacancyNotification">Vacancies Available</div>
              
              {vacanciesQuery.isError && <div>There was an error trying to get the vacancies</div>}

              {vacanciesQuery.isLoading && <div>Loading your vacancies</div>}

              {
                vacanciesQuery.data && (
                <div className="vacanciesList">
                  {vacanciesQuery.data.map((vacancy, index) => (
                    <Link to={`/vacancies/${vacancy.id}`} key={index} className="vacancyItem">
                      <div className="vacancyItemContent">
                        <strong>Position - </strong> {vacancy.position}
                      </div>
                    </Link>  
                  ))}
                </div>
              )}
            </div>
          )}

          {company && (
            <div className="companyDescriptionContainer">
              <img src={company.image} alt='company logo' className='soloCompanyImage'/>
              <div className="companyLabelContainer">
                <p><span className="label">Company Name</span></p>
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
            </div>
          )}
        </>
  )
}
  