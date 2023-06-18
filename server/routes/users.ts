import express from 'express'
import { addNewUser } from '../db/dbusers'
import { NewUser } from '../../models/users'
const router = express.Router()

//server = '/api/v1'

// add the checkJWT
// POST /api/v1/newUser
router.post('/newUser', async (req, res) => {
  // const auth0Id = req?.auth.sub
  // console.log(req.auth)
  try {
    const newUser = req.body as NewUser
    console.log('There has been a request to add a new user:')
    console.log(req.body)
    if (!newUser) {
      res.sendStatus(400)
      return
    }
    // auth0Id will be an column but it will be a unqiue
    const [user] = await addNewUser(newUser)
    console.log({ user })
    res.json({ user })
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
