import { Link, useParams } from 'react-router-dom'

import { getVacancyById, getCompanyById } from "../../apiClient"

import  HiUserName  from '../../components/hiUserName'
import { useQuery } from '@tanstack/react-query'

export default function VacancyPageBody() {
    const { id } = useParams()
    const vacancyId = Number(id)

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
      console.log(companyId)
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
        <div className="vacancyPageContainer">
          <HiUserName />

              <div className="vacancyDescriptionContainer">

                {company.image && company.name && (
                  <div className="vacancyLabelContainer">
                    <img src={company.image} alt="company logo" className="soloCompanyImage" />
                    <p><span className="vacancyCompanyLabel">{company.name}</span></p>
                    <p></p>
                  </div>
                )}


                <div className="vacancyLabelContainer">
                  <p><span className="vacancylabel">Position</span></p>
                  <p>{vacancy.position}</p>
                </div>
                <div className="vacancyLabelContainer">
                  <p><span className="vacancylabel">Salary</span></p>
                  <p>{vacancy.salary}</p>
                </div>
                <div className="vacancyLabelContainer">
                  <p><span className="vacancylabel">Job Description</span></p>
                  <p>{vacancy.jobDescription}</p>
                </div>
                <div className="vacancyLabelContainer">
                  <p><span className="vacancylabel">Requirements</span></p>
                  <p>{vacancy.requirements}</p>
                </div>
                <div className="vacancyLabelContainer">
                  <p><span className="vacancylabel">Deadline</span></p>
                  <p>{vacancy.deadline}</p>
                </div>
                
                <div className="vacancySubmitContainer">
                  <button type="submit" className="vacancySubmitButton">Apply</button>
                </div>

              </div>
        </div>
  )
}
  