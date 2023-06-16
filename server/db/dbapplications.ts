import connection from './connection'
import { NewApplication, Applications } from "../../models/applications"

export async function addApplication(application: NewApplication, db = connection): Promise<NewApplication> {
    const { vacancyId, name, email, companyName, companyImage, coverLetter, cv } = application
    const [insertedApplication] = await db('applications')
        .insert({ vacancyId, name, email, companyName, companyImage, coverLetter, cv })
        .returning(['id', 'name', 'email', 'companyName', 'companyImage', 'coverLetter', 'cv'])

  return insertedApplication
  }

  export function getApplicationsByEmail(email: string, db = connection) {
    return db<Applications>('applications')
      .where('email', '=', email)
      .select()
      .then((applications) => {
        console.log(`Company with name (${email}):`, applications)
        return applications
      })
      .catch((error) => {
        console.error('Error fetching application by email:', error)
        throw error
      })
  }