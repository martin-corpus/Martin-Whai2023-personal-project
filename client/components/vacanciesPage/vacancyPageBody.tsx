import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getVacancyById } from "../../apiClient"
import { Vacancies } from "../../../models/vacancies"
import  HiUserName  from '../../components/hiUserName'
import { useQuery } from '@tanstack/react-query'

export default function VacancyPageBody() {
    const { id } = useParams()
    const vacancyId = Number(id)
    // const [vacancy, setVacancy] = useState<Vacancies | null>(null)
    //http://localhost:5173/vacancies/1


      const vacancyQuery = useQuery(['vacancy', id], () => getVacancyById(vacancyId))

      console.log(vacancyQuery.data)
      console.log(vacancyQuery.error)

      if (vacancyQuery.error) {
        return <div>There was an error trying to get the vacancy</div>
      } 
    
      if (!vacancyQuery.data || vacancyQuery.isLoading) {
        return <div>Loading your vacancy</div>
      }

      return (
        <>
          <HiUserName />

              <div className="companyDescriptionContainer">

                {/* <img src={company.image} alt='company logo' className='soloCompanyImage'/>
                <div className="companyLabelContainer">
                  <p><span className="label">Name</span></p>
                  <p>{company.name}</p>
                </div> */}

                <div className="companyLabelContainer">
                  <p><span className="label">Position</span></p>
                  <p>{vacancyQuery.data.position}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Salary</span></p>
                  <p>{vacancyQuery.data.salary}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Job Description</span></p>
                  <p>{vacancyQuery.data.jobDescription}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Requirements</span></p>
                  <p>{vacancyQuery.data.requirements}</p>
                </div>
                <div className="companyLabelContainer">
                  <p><span className="label">Deadline</span></p>
                  <p>{vacancyQuery.data.deadline}</p>
                </div>
                
              </div>
            
        </>
  )
}
  