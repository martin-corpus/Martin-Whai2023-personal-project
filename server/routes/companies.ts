import express from 'express'
import { getCompaniesByLocationId, getCompaniesByFieldId } from '../db/dbcompanies'
// import { Companies } from "../../models/companies"
const router = express.Router()

//server = /api/v1

// GET /api/v1/companies/location/:id
router.get('/companies/location/:id', async (req, res) => {
  console.log('something')
  try {
    const location = req.params.id
    const companies = await getCompaniesByLocationId(Number(location))
    console.log(`Fetched companies by location (${location}):`, companies)
    res.json({ companies })
  } catch (error) {
    console.error('Error fetching companies by location:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/v1/companies/field/:id
router.get('/companies/field/:id', async (req, res) => {
  try {
    const field = req.params.id
    const companies = await getCompaniesByFieldId(Number(field))
    console.log(`Fetched companies by field (${field}):`, companies)
    res.json({ companies })
  } catch (error) {
    console.error('Error fetching companies by field:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router