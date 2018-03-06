import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import config from './services/config'

import api from 'modules/api'
import setup from 'modules/setup'

mongoose.connect(config.mongo)

const system = express()

system.use(morgan('dev'))

system.use('/api', api)
system.use('/setup', setup)

system.listen(config.serverPort, () => console.log(`Server listen to :${config.serverPort}`))
