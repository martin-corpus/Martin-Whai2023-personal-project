import express from 'express'
import { getCompanies } from '../db/dbcompanies'
// import { Companies } from "../../models/companies"
const router = express.Router()

//server = /api/v1

// GET /api/v1/companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await getCompanies()
    console.log('Fetched companies:', companies)
    res.json({ companies })
  } catch(error) {
    console.error('Error fetching companies:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router