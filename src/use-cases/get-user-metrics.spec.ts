import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCheckInsRepository } from './../repositories/in-memory/in-memory-check-ins-repository'
import { GetUserMetricsUseCase } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInsRepository
let getUserMetrics: GetUserMetricsUseCase

describe('Get User Metrics Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    getUserMetrics = new GetUserMetricsUseCase(checkInsRepository)
  })

  it('should be able to get check-ins', async () => {
    await checkInsRepository.create({
      gym_id: 'gym-01',
      user_id: 'user-01',
    })

    await checkInsRepository.create({
      gym_id: 'gym-02',
      user_id: 'user-01',
    })

    await checkInsRepository.create({
      gym_id: 'gym-03',
      user_id: 'user-01',
    })

    const { checkInsCount } = await getUserMetrics.execute({
      userId: 'user-01',
    })
    expect(checkInsCount).toEqual(3)
  })
})
