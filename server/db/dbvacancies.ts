import connection from './connection'
import { Vacancies } from "../../models/vacancies"

export async function getVacanciesByCompanyId(companyId: number, db = connection): Promise<Vacancies[]> {
    return db('vacancies').where({ companyId }).select() 
  }

  export async function getVacancyById(id: number, db = connection): Promise<Vacancies> {
    const vacancy = await db('vacancies').where({ id }).first()
    console.log(vacancy)
    return vacancy
  }