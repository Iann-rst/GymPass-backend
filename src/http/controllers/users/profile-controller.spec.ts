import { app } from '@/app'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Profile User Controller (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user profile', async () => {
    /* Cria o usuário */

    await request(app.server).post('/users').send({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

    /* Autentica o usuário */
    const authResponse = await request(app.server).post('/sessions').send({
      email: 'john@doe.com',
      password: '123456',
    })

    const { token } = authResponse.body

    /* Perfil do usuário */
    const profileResponse = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: 'john@doe.com',
      }),
    )
  })
})
