import { useParams } from 'react-router-dom'
import { getVacancyById, getCompanyById, getApplicationsById, deleteApplicationById } from "../../apiClient"
import  HiUserName  from '../../components/hiUserName'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'


export default function ApplicationPageBody() {
    const { id } = useParams()
    const applicationId = Number(id)
    const queryClient = useQueryClient()

    const [isApplicationDeleted, setIsApplicationDeleted] = useState(false)

    const applicationQuery = useQuery(['application', id], () => getApplicationsById(applicationId))
    const vacancyId = Number(applicationQuery.data?.vacancyId)

    const vacancyQuery = useQuery(['vacancy', vacancyId], () => getVacancyById(vacancyId))
    const companyId = vacancyQuery.data?.companyId
    const companyQuery = useQuery(['company', companyId], () => {
      if (typeof companyId === 'number') {
        return getCompanyById(companyId)
      } else {
        throw new Error('Invalid companyId')
      }
    })

    const deleteApplicationMutation = useMutation(() => deleteApplicationById(applicationId), {
        onSuccess: async () => {
          queryClient.invalidateQueries(['application', id])

          setIsApplicationDeleted(true)
        },
      })

    useEffect(() => {
        if (isApplicationDeleted) {
          setTimeout(() => {
            setIsApplicationDeleted(false)
            window.location.href = '/home'
          }, 1000)
        }
      }, [isApplicationDeleted])
    

    const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        deleteApplicationMutation.mutate()
        console.log('deleting', id)
    }
    
    if (vacancyQuery.error || companyQuery.error || applicationQuery.error) {
        return <div>There was an error trying to fetch the data</div>
      } 
      
    if (vacancyQuery.isLoading ||
        companyQuery.isLoading ||
        applicationQuery.isLoading ||
        !vacancyQuery.data ||
        !companyQuery.data ||
        !applicationQuery.data) {
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
                <button type="submit" className="vacancySubmitButton" onClick={handleDeleteClick}>
                      Delete Application
                </button>

                {isApplicationDeleted && <p className="applicationDeleted">Application Deleted!</p>}
                </div>

              </div>
        </div>
  )
}
  