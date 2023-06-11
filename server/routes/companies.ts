import express from 'express'
import { getCompaniesByLocation, getCompaniesByField } from '../db/dbcompanies'
// import { Companies } from "../../models/companies"
const router = express.Router()

//server = /api/v1

/// GET /api/v1/companies/:location
router.get('/companies/:location', async (req, res) => {
  try {
    const location = req.params.location
    const companies = await getCompaniesByLocation(location)
    console.log(`Fetched companies by location (${location}):`, companies)
    res.json({ companies })
  } catch (error) {
    console.error('Error fetching companies by location:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/v1/companies/:field
router.get('/companies/:field', async (req, res) => {
  try {
    const field = req.params.field
    const companies = await getCompaniesByField(field)
    console.log(`Fetched companies by field (${field}):`, companies)
    res.json({ companies })
  } catch (error) {
    console.error('Error fetching companies by field:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router