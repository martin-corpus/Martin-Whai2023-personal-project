import { useParams } from 'react-router-dom'
import { getVacancyById, getCompanyById, addApplication } from '../../apiClient'
import HiUserName from '../../components/hiUserName'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useAuth0, User } from '@auth0/auth0-react'
import { NewApplication } from '../../../models/applications'
import { Vacancies } from '../../../models/vacancies'
import { Companies } from '../../../models/companies'

export default function VacancyPageBody() {
  // TODO: change this back to a real user
  const { user } = useAuth0()

  // User | undefined = {
  //   nickname: User.nickname,
  //   email: 'johndoe@email.com',
  // }

  const { id } = useParams()
  const vacancyId = Number(id)

  // REFACTOR: this can probably be a single query (get vacancy and company together)
  const vacancyQuery = useQuery(['vacancy', id], () =>
    getVacancyById(vacancyId)
  )
  const companyId = vacancyQuery.data?.companyId
  const companyQuery = useQuery(
    ['company', companyId],
    () => {
      if (typeof companyId === 'number') {
        return getCompanyById(companyId)
      } else {
        throw new Error('Invalid companyId')
      }
    },
    { enabled: !!companyId }
  )

  if (vacancyQuery.error || companyQuery.error) {
    return <div>There was an error trying to fetch the data</div>
  }

  if (
    vacancyQuery.isLoading ||
    companyQuery.isLoading ||
    !vacancyQuery.data ||
    !companyQuery.data
  ) {
    return <div>Loading your vacancy</div>
  }

  if (!user) {
    return <div>Please log in to apply for this vacancy</div>
  }

  const vacancy = vacancyQuery.data
  const company = companyQuery.data

  return <VacancyPageContents vacancy={vacancy} user={user} company={company} />
}

function VacancyPageContents({
  company,
  vacancy,
  user,
}: {
  company: Companies
  vacancy: Vacancies
  user: User
}) {
  const emptyForm: NewApplication = {
    vacancyId: vacancy.id, //vacancy.id
    name: user?.nickname ? user.nickname : '',
    email: user?.email ? user.email : '',
    companyName: company.name, //company.name
    companyImage: company.image, //company.image
    coverLetter: null,
    cv: null,
  }

  const [showInputs, setShowInputs] = useState(false)
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false)
  const [formKey, setFormKey] = useState(0)

  const queryClient = useQueryClient()
  const addApplicationMutation = useMutation(addApplication, {
    onSuccess: async () => {
      queryClient.invalidateQueries(['application'])
    },
  })

  async function handleSubmit(data: NewApplication) {
    addApplicationMutation.mutate(data)
    setIsApplicationSubmitted(true)

    setTimeout(() => {
      setIsApplicationSubmitted(false)
      setFormKey(formKey + 1)
    }, 2000)
  }

  if (addApplicationMutation.isError) {
    return <div>There was an error trying to add your application</div>
  }

  if (addApplicationMutation.isLoading) {
    return <div>Adding your application</div>
  }

  return (
    <div className="vacancyPageContainer">
      <HiUserName />

      <div className="vacancyDescriptionContainer">
        <div className="vacancyLabelContainer">
          <img
            src={company.image}
            alt="company logo"
            className="soloCompanyImage"
          />
          <p>
            <span className="vacancyCompanyLabel">{company.name}</span>
          </p>
          <p></p>
        </div>

        <div className="vacancyLabelContainer">
          <p>
            <span className="vacancylabel">Position</span>
          </p>
          <p>{vacancy.position}</p>
        </div>
        <div className="vacancyLabelContainer">
          <p>
            <span className="vacancylabel">Salary</span>
          </p>
          <p>{vacancy.salary}</p>
        </div>
        <div className="vacancyLabelContainer">
          <p>
            <span className="vacancylabel">Job Description</span>
          </p>
          <p>{vacancy.jobDescription}</p>
        </div>
        <div className="vacancyLabelContainer">
          <p>
            <span className="vacancylabel">Requirements</span>
          </p>
          <p>{vacancy.requirements}</p>
        </div>
        <div className="vacancyLabelContainer">
          <p>
            <span className="vacancylabel">Deadline</span>
          </p>
          <p>{vacancy.deadline}</p>
        </div>

        {showInputs ? (
          <Form
            onSubmit={handleSubmit}
            initialData={emptyForm}
            key={formKey}
            isDisabled={isApplicationSubmitted}
          />
        ) : (
          <div className="vacancySubmitContainer">
            <button
              type="submit"
              className="vacancySubmitButton"
              onClick={() => setShowInputs(true)}
            >
              Apply
            </button>
          </div>
        )}

        {isApplicationSubmitted && (
          <p className="applicationSubmitted">Application submitted!</p>
        )}
      </div>
    </div>
  )
}

interface FormProps {
  initialData: NewApplication
  onSubmit: (data: NewApplication) => void
  isDisabled: boolean
}
export function Form({ initialData, onSubmit, isDisabled }: FormProps) {
  const [form, setForm] = useState<NewApplication>(initialData)

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const file = event.target.files?.[0]

    if (file) {
      const updatedFormData = new FormData()
      updatedFormData.append(name, file)

      const newForm: NewApplication = {
        ...form,
        [name]: file,
      }

      setForm(newForm)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(form)
      }}
      aria-label="Add Application Form"
    >
      <fieldset disabled={isDisabled}>
        <div className="vacancyInputsContainer">
          <div className="inputContainer">
            <label htmlFor="vacancyNumber">Vacancy #:</label>
            <input
              type="text"
              id="vacancyNumber"
              placeholder="Vacancy #"
              value={initialData.vacancyId}
              readOnly
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={initialData.name}
              readOnly
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={initialData.email}
              readOnly
            />
          </div>

          <div className="inputContainer">
            <input
              type="hidden"
              id="company"
              value={initialData.companyName}
              readOnly
            />
          </div>

          <div className="inputContainer">
            <input
              type="hidden"
              id="companyImage"
              value={initialData.companyImage}
              readOnly
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="coverLetter">Cover Letter:</label>
            <input
              type="file"
              id="coverLetter"
              name="coverLetter"
              placeholder="Upload Cover Letter"
              required
              onChange={handleFileChange}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="cv">CV:</label>
            <input
              type="file"
              id="cv"
              name="cv"
              placeholder="Upload CV"
              required
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="vacancySubmitButton">
            Submit Application
          </button>
        </div>
      </fieldset>
    </form>
  )
}
