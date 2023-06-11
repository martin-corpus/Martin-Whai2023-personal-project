/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../models/companies"

const companyUrl = '/api/v1/companies'

export async function getCompaniesByLocation(location: string): Promise<Companies[]> {
    const response = await request.get(`${companyUrl}/location/${location}`)
    console.log('Location Response:', response.body)
    const companies = response.body.companies || []
    console.log('Location Companies:', companies)
    return companies
}
  
export async function getCompaniesByField(field: string): Promise<Companies[]> {
    const response = await request.get(`${companyUrl}/field/${field}`)
    console.log(response.body.companies)
    return response.body.companies
}