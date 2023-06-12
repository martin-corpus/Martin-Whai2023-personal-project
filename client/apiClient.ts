/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../models/companies"
import { NewUser, User } from "../models/users"



//// COMPANIES
const companyUrl = '/api/v1/companies'

export async function getCompaniesByLocation(locationId: string): Promise<Companies[]> {
    console.log(`${companyUrl}/location/${locationId}`)
    const response = await request.get(`${companyUrl}/location/${locationId}`)
    console.log('Location Response:', response.body)
    const companies = response.body.companies || []
    console.log('Location Companies:', companies)
    return companies
}
  
export async function getCompaniesByField(fieldId: string): Promise<Companies[]> {
    const response = await request.get(`${companyUrl}/field/${fieldId}`)
    console.log(response.body)
    return response.body.companies
}

///// NEW USERS
const newUserUrl = '/api/v1/newUser'

export async function addNewUser(newUser: NewUser): Promise<User> {
    const response = await request.post(newUserUrl).send( newUser )
    console.log(response.body)
    return response.body.user
}