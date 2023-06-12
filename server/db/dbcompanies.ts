import connection from './connection'
import { Companies } from "../../models/companies"


export function getCompaniesByLocationId(locationId: number, db = connection) {
  return db<Companies>('companies')
    .where('id', '=', locationId)
    .select()
    .then((companies) => {
      console.log(`Companies with location (${locationId}):`, companies)
      return companies
    })
    .catch((error) => {
      console.error('Error fetching companies by location:', error)
      throw error
    })
}

export function getCompaniesByFieldId(fieldId: number, db = connection) {
  return db<Companies>('companies')
    .where('id', '=', fieldId)
    .select()
    .then((companies) => {
      console.log(`Companies with field (${fieldId}):`, companies)
      return companies
    })
    .catch((error) => {
      console.error('Error fetching companies by field:', error)
      throw error
    })
}

