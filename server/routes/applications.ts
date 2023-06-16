import express from 'express'
import { addApplication, getApplicationsByEmail } from '../db/dbapplications'
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

// GET /api/v1/applications/:email
router.get('/applications/:email', async (req, res) => {
  try {
    const email = req.params.email
    const application = await getApplicationsByEmail(email)
    console.log(`Fetched application by email (${email}):`, application)
    res.json({ application })
  } catch (error) {
    console.error('Error fetching application by email:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router