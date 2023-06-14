import connection from './connection'
import { Companies } from "../../models/companies"


export function getCompaniesByLocation(location: string, db = connection) {
  return db<Companies>('companies')
    .where('location', '=', location)
    .select()
    .then((companies) => {
      console.log(`Companies with location (${location}):`, companies)
      return companies
    })
    .catch((error) => {
      console.error('Error fetching companies by location:', error)
      throw error
    })
}

export function getCompaniesByField(field: string, db = connection) {
  return db<Companies>('companies')
    .where('field', '=', field)
    .select()
    .then((companies) => {
      console.log(`Companies with field (${field}):`, companies)
      return companies
    })
    .catch((error) => {
      console.error('Error fetching companies by field:', error)
      throw error
    })
}

export function getCompanyByName(name: string, db = connection) {
  return db<Companies>('companies')
    .where('name', '=', name)
    .select()
    .then((companies) => {
      console.log(`Company with name (${name}):`, companies)
      return companies[0]
    })
    .catch((error) => {
      console.error('Error fetching company by name:', error)
      throw error
    })
}

