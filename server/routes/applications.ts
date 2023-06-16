import express from 'express'
import { addApplication } from '../db/dbapplications'
const router = express.Router()

//server = /api/v1

// POST /api/v1/vacancy/:id
router.post('/vacancy/:id', async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      res.status(400).send('Bad Request: ID must be a number')
      return
    }
  
    try {
      const applicationData = req.body
      console.log(applicationData.coverLetter)
      const application = await addApplication( applicationData)
      res.status(200).json({ application })
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not add application')
    }
  })



export default router