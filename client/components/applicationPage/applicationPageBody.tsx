import { useParams } from 'react-router-dom'
import { getVacancyById, getCompanyById, addApplication } from "../../apiClient"
import  HiUserName  from '../../components/hiUserName'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { NewApplication } from '../../../models/applications'

export default function ApplicationPageBody() {
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

    console.log('vacancy data:', vacancyQuery.data) 
    console.log('company id:', companyId)
    console.log('vacancy error:',vacancyQuery.error)
    console.log('company data:', companyQuery.data)
    console.log('company error:', companyQuery.error)

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
                <button type="submit" className="vacancySubmitButton">
                      Delete Application
                </button>
                </div>

              </div>
        </div>
  )
}
  