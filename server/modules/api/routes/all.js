import {
  create as createUser,
  list as listAllUsers,
  getUser
} from '../controllers/user'

import {
  getTemplates,
  getTags,
  create as createProduce
} from '../controllers/produce'

import {
  check as checkToken,
  create as createToken,
  destroy as destroyToken
} from '../controllers/jwt'

export default app => {
  app.post('/authenticate', createToken)
  app.post('/signout', checkToken, destroyToken)
  app.get('/check', checkToken, (req, res) => res.json(req.decoded))

  app.post('/registration', createUser)
  app.get('/users', checkToken, listAllUsers)

  app.get('/templates', getTemplates)
  app.get('/tags', getTags)
  app.get('/user/:username', getUser)
  app.post('/produce/create', createProduce)
}
