/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from '../models/companies'
import { NewUser, Users } from '../models/users'
import { Vacancies } from '../models/vacancies'
import { NewApplication, Applications } from '../models/applications'

//// COMPANIES
const companyUrl = '/api/v1/companies'
const companyNameUrl = '/api/v1/company'
const applicationsUrl = '/api/v1/applications'

export async function getCompaniesByLocation(
  location: string
): Promise<Companies[]> {
  console.log(`${companyUrl}/location/${location}`)
  const response = await request.get(`${companyUrl}/location/${location}`)
  console.log('Location Response:', response.body)
  const companies = response.body.companies || []
  console.log('Location Companies:', companies)
  return companies
}

export async function getCompaniesByField(field: string): Promise<Companies[]> {
  const response = await request.get(`${companyUrl}/field/${field}`)
  console.log('Field Response:', response.body)
  return response.body.companies
}

export async function getCompanyByName(name: string): Promise<Companies> {
  const response = await request.get(`${companyNameUrl}/${name}`)
  console.log('Company Response:', response.body.company)
  return response.body.company
}

///// NEW USERS
const newUserUrl = '/api/v1/newUser'

export async function addNewUser(newUser: NewUser): Promise<Users> {
  const response = await request.post(newUserUrl).send(newUser)
  console.log(response.body)
  return response.body.user
}

/////// VACANCIES

// GET /api/v1/vacancies/:companyId
export async function getVacanciesByCompanyId(
  companyId: number
): Promise<Vacancies[]> {
  if (isNaN(companyId)) {
    return []
  } else {
    const response = await request.get(`/api/v1/vacancies/${companyId}`)
    console.log(response.body)
    return response.body
  }
}

// GET /api/v1/vacancy/:id
export async function getVacancyById(id: number): Promise<Vacancies> {
  const response = await request.get(`/api/v1/vacancy/${id}`)
  console.log(response.body)
  return response.body
}

// GET /api/v1/vacancy/company/:id
export async function getCompanyById(id: number): Promise<Companies> {
  const response = await request.get(`/api/v1/vacancy/company/${id}`)
  console.table(response.body)
  return response.body
}

////// POST /api/v1/vacancy/:id

export async function addApplication(
  application: NewApplication
): Promise<void> {
  await request
    .post(`/api/v1/vacancy/${application.vacancyId}`)
    .send(application)
}

// GET /api/v1/applications/:email

export async function getApplicationsByEmail(
  email: string
): Promise<Applications[]> {
  const response = await request.get(`${applicationsUrl}/${email}`)
  console.log('Applications Response:', response.body.application)
  return response.body.application
}

// GET /api/v1/home/applications/:id
export async function getApplicationsById(id: number): Promise<Applications> {
  const response = await request.get(`/api/v1/home/applications/${id}`)
  console.log(response.body)
  return response.body
}

// DELETE /api/v1/home/applications/:id

export async function deleteApplicationById(id: number): Promise<void> {
  await request.delete(`/api/v1/home/applications/${id}`)
}
