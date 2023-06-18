import { join, resolve } from 'node:path'
import express from 'express'
import companies from './routes/companies'
import vacancies from './routes/vacancies'
import users from './routes/users'
import applications from './routes/applications'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1', companies)
server.use('/api/v1', vacancies)
server.use('/api/v1', users)
server.use('/api/v1', applications)


if (process.env.NODE_ENV === 'production') {
    server.use('/assets', express.static(resolve(__dirname, '../assets')))
    server.get('*', (req, res) => {
      res.sendFile(resolve(__dirname, '../index.html'))
    })
}


export default server
