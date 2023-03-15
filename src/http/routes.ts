import { FastifyInstance } from 'fastify'
import { authenticateController } from './controllers/authenticate.controller'
import { registerController } from './controllers/register.controller'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
  app.post('/sessions', authenticateController)
}
