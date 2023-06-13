import connection from './connection'
import { Vacancies } from "../../models/vacancies"

export async function getVacanciesByCompanyId(companyId: number, db = connection): Promise<Vacancies | undefined> {
    return db('vacancies').where({ companyId }).first()
  }

