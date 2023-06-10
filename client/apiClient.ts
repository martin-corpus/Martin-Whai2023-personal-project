/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../../models/companies"

const companyUrl = '/api/v1/companies/'

export async function getCompanies(): Promise<Companies[]> {
    const response = await request.get(companyUrl)
        console.log(response.body)
        return response.body.companies
}