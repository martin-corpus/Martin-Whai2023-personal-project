import express from 'express'
import { getVacanciesByCompanyId, getVacancyById } from '../db/dbvacancies'
import { getCompanyById } from '../db/dbvacancies'

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
      res.status(500).send('Could not get vacancies')
    }
  })

  // GET /api/v1/vacancy/:id
router.get('/vacancy/:id', async (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      res.status(400).send('Bad Request: Id must be a number')
      return
    }
  
    try {
      const vacancy = await getVacancyById(id)
      if (!vacancy) {
        res.sendStatus(404)
        return
      }
      console.log(`Fetched vacancy by (${id}):`, vacancy)
      res.json(vacancy)
    } catch (err) {
      console.log(err)
      res.status(500).send('Could not get vacancy')
    }
  })

  // GET /api/v1/vacancy/company/:id
router.get('/vacancy/company/:id', async (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: Id must be a number')
    return
  }

  try {
    const company = await getCompanyById(id)
    if (!company) {
      res.sendStatus(404)
      return
    }
    console.log(`Fetched vacancy by (${id}):`, company)
    res.json(company)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get vacancy')
  }
})

  export default router