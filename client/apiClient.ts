/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../models/companies"

const companyUrl = '/api/v1/companies'

export async function getCompaniesByLocation(location: string): Promise<Companies[]> {
    const response = await request.get(`${companyUrl}/${location}`)
    console.log(response.body)
    return response.body.companies
  }
  
  export async function getCompaniesByField(field: string): Promise<Companies[]> {
    const response = await request.get(`${companyUrl}?/${field}`)
    console.log(response.body)
    return response.body.companies
  }