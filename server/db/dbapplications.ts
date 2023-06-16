import connection from './connection'
import { NewApplication } from "../../models/applications"

export async function addApplication(application: NewApplication, db = connection): Promise<NewApplication> {
    const { vacancyId, name, email, companyName, companyImage, coverLetter, cv } = application
    const [insertedApplication] = await db('applications')
        .insert({ vacancyId, name, email, companyName, companyImage, coverLetter, cv })
        .returning(['id', 'name', 'email', 'companyName', 'companyImage', 'coverLetter', 'cv'])

  return insertedApplication
  }