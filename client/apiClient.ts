/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Companies } from "../../models/companies"

const companyUrl = '/api/v1/companies/'

export async function getCompanies(): Promise<Company[]> {
    try {
        console.log('Before request')
        const response = await request.get(companyUrl)
        console.log('After request')
        console.log('Response:', response.body)
        console.log(response.body.companies)
        if (response.body && response.body.companies) {
            console.log(response.body.companies)
            return response.body.companies
        } else {
            return [] // Return an empty array if response or companies are null/empty
        }
    } catch (error) {
        console.error(error)
        return [] 
    }
}