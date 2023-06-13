/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../models/companies"
import { NewUser, User } from "../models/users"
import { Vacancies } from "../models/vacancies"



//// COMPANIES
const companyUrl = '/api/v1/companies'
const companyNameUrl = '/api/v1/company'

export async function getCompaniesByLocation(location: string): Promise<Companies[]> {
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

export async function addNewUser(newUser: NewUser): Promise<User> {
    const response = await request.post(newUserUrl).send( newUser )
    console.log(response.body)
    return response.body.user
}

/////// VACANCIES

// GET /api/v1/vacancies/:companyId
export async function getVacancciesByCompanyId(companyId: string): Promise<Vacancies> {
    const response = await request.get(`/api/v1/vacancies/${companyId}`)
    return response.body.vacancies
  }