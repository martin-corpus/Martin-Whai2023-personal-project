import express from 'express'
import { getCompanies } from '../db/db'
import { Companies } from "../../models/companies"
const router = express.Router()

//server = /api/v1

// GET /api/v1/companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await getCompanies()
    console.log(companies)
    res.json({ companies })
  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})