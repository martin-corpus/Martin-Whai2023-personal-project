import connection from './connection'
import { NewUser } from '../../models/users'

// add new user

export async function addNewUser(newUser: NewUser, db = connection) {
  return db('users').insert(newUser).returning('*')
}
