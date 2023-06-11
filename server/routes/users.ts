import express from 'express'
import { addNewUser } from '../db/dbusers'
import { NewUser } from "../../models/users"
const router = express.Router()

//server = '/api/v1'

// POST /api/v1/newUser
router.post('/newUser', async (req, res) => {
    try {
      const newUser = req.body as NewUser
      console.log('There has been a request to add a new user:')
      console.log(req.body)
      if(!newUser) {
        res.sendStatus(400)
        return
      }
      const [user] = await addNewUser(newUser)
      console.log({ user })
      res.json({ user })
    } catch(error) {
      console.error(error)
      res.sendStatus(500)
    }
  })


export default router