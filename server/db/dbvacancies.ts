import connection from './connection'
import { Vacancies } from '../../models/vacancies'
import { Companies } from '../../models/companies'

export async function getVacanciesByCompanyId(
  companyId: number,
  db = connection
): Promise<Vacancies[]> {
  return db('vacancies').where({ companyId }).select()
}

export async function getVacancyById(
  id: number,
  db = connection
): Promise<Vacancies> {
  const vacancy = await db('vacancies').where({ id }).first()
  console.log(vacancy)
  return vacancy
}

export async function getCompanyById(
  id: number,
  db = connection
): Promise<Companies> {
  const vacancy = await db('companies').where({ id }).first()
  console.log(vacancy)
  return vacancy
}
