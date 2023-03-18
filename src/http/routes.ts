import { FastifyInstance } from 'fastify'
import { authenticateController } from './controllers/authenticate-controller'
import { profileController } from './controllers/profile-controller'
import { registerController } from './controllers/register-controller'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerController)
  app.post('/sessions', authenticateController)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profileController)
}
