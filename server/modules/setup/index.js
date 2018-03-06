import express from 'express'

import initAllRoutes from 'modules/setup/routes/all'

const app = express()

initAllRoutes(app)

export default app
