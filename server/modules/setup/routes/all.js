import { initRootUser } from 'modules/setup/controllers/user'

export default app => {
  app.get('/', initRootUser)
}
