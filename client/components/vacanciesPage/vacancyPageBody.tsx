import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getVacancyById, getCompanyById } from "../../apiClient"
import { Vacancies } from "../../../models/vacancies"
import  HiUserName  from '../../components/hiUserName'
import { useQuery } from '@tanstack/react-query'

export default function VacancyPageBody() {
    const { id } = useParams()
    const vacancyId = Number(id)
    // const [vacancy, setVacancy] = useState<Vacancies | null>(null)
    //http://localhost:5173/vacancies/1


      const vacancyQuery = useQuery(['vacancy', id], () => getVacancyById(vacancyId))
      const companyId = vacancyQuery.data?.companyId
      const companyQuery = useQuery(['company', companyId], () => {
        if (typeof companyId === 'number') {
          return getCompanyById(companyId)
        } else {
          throw new Error('Invalid companyId')
        }
      })

      console.log(vacancyQuery.data)
      console.log(vacancyQuery.error)
      console.log(companyQuery.data)
      console.log(companyQuery.error)

      if (vacancyQuery.error || companyQuery.error) {
        return <div>There was an error trying to fetch the data</div>
      } 
    
      if (vacancyQuery.isLoading ||
        companyQuery.isLoading ||
        !vacancyQuery.data ||
        !companyQuery.data) {
        return <div>Loading your vacancy</div>
      }

      const vacancy = vacancyQuery.data
      const company = companyQuery.data

      return (
        <>
          <HiUserName />

              <div className="companyDescriptionContainer">

                {company.image && (
                  <div className="companyLabelContainer">
                    
                    <img src={company.image} alt="company logo" className="soloCompanyImage" />
                  </div>
                )}

                {company.name && (
                  <div className="companyLabelContainer">
                    <p><span className="label">Company Name</span></p>
                    <p>{company.name}</p>
                  </div>
                )}

                <div className="companyLabelContainer">
                  <p><span className="label">Position</span></p>
                  <p>{vacancy.position}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Salary</span></p>
                  <p>{vacancy.salary}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Job Description</span></p>
                  <p>{vacancy.jobDescription}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Requirements</span></p>
                  <p>{vacancy.requirements}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Deadline</span></p>
                  <p>{vacancy.deadline}</p>
                </div>
                
              </div>
            
        </>
  )
}
  