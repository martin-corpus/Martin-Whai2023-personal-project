import { join } from 'node:path'
import express from 'express'
import companies from './routes/companies'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1', companies)

export default server