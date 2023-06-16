import { Link, useParams } from 'react-router-dom'
import { getVacancyById, getCompanyById, addApplication } from "../../apiClient"
import  HiUserName  from '../../components/hiUserName'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { NewApplication } from '../../../models/applications'

export default function VacancyPageBody() {
    const { user } = useAuth0()
    const { id } = useParams()
    const vacancyId = Number(id)

    const initialFormData = {
      vacancyId: vacancy.id,
      name: user?.nickname,
      email: user?.email,
      companyName: company.name,
      coverLetter: null,
      cv: null,
    }

    const [showInputs, setShowInputs] = useState(false)
    const [form, setForm] = useState<NewApplication>(initialFormData)

    const queryClient = useQueryClient()
    const addApplicationMutation = useMutation(addApplication, {
        onSuccess: async () => {
          queryClient.invalidateQueries(['application'])
        }
    })

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

    const handleApplyButtonClick = () => {
      setShowInputs(true)
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()
      addApplicationMutation.mutate(form)
      setForm(initialFormData)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value, files } = event.target
      const file = files?.[0];
      const newForm = { ...form, [name]: file };
      setForm(newForm)
    }

    if (addApplicationMutation.isError) {
      return <div>There was an error trying to add your application</div>
    }
  
    if (addApplicationMutation.isLoading) {
      return <div>Adding your application</div>
    }

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
                
                {!showInputs && (
                  <div className="vacancySubmitContainer">
                    <button type="submit" className="vacancySubmitButton" onClick={handleApplyButtonClick}>
                      Apply
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} aria-label="Add Application Form">
                  {showInputs && user && (
                    <div className="vacancyInputsContainer">
                    <div className="inputContainer">
                      <label htmlFor="vacancyNumber">Vacancy #:</label>
                      <input type="text" id="vacancyNumber" placeholder="Vacancy #" value={vacancy.id} readOnly />
                    </div>
                    
                    <div className="inputContainer">
                      <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Name" value={user.nickname} readOnly />
                    </div>
                  
                    <div className="inputContainer">
                      <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Email" value={user.email} readOnly />
                    </div>
                    
                    <div className="inputContainer">
                      
                        <input type="hidden" id="company" value={company.name} readOnly />
                    </div>
                    
                    <div className="inputContainer">
                      
                        <input type="hidden" id="companyImage" value={company.image} readOnly />
                    </div>
                    
                    <div className="inputContainer">
                      <label htmlFor="coverLetter">Cover Letter:</label>
                        <input type="file" id="coverLetter" placeholder="Upload Cover Letter" required onChange={handleChange}/>
                    </div>
                    
                    <div className="inputContainer">
                      <label htmlFor="cv">CV:</label>
                        <input type="file" id="cv" placeholder="Upload CV" required onChange={handleChange}/>
                    </div>
                    
                    <button type="submit" className="vacancySubmitButton">
                      Submit Application
                    </button>
                  </div>    
                )}
              </form>
              </div>
        </div>
  )
}
  