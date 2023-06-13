import express from 'express'
import { getVacanciesByCompanyId } from '../db/dbvacancies'

const router = express.Router()

//server = /api/v1

// GET /api/v1/vacancies/:companyId
router.get('/vacancies/:companyId', async (req, res) => {
    const companyId = Number(req.params.companyId)
    if (isNaN(companyId)) {
      res.status(400).send('Bad Request: companyId must be a number')
      return
    }
  
    try {
      const vacancies = await getVacanciesByCompanyId(companyId)
      if (!vacancies) {
        res.sendStatus(404)
        return
      }
      res.json(vacancies)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not get vacancy')
    }
  })