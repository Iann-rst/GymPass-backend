import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let createGymUseCase: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    createGymUseCase = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create Gym', async () => {
    const { gym } = await createGymUseCase.execute({
      title: 'JavaScript',
      description: '',
      phone: '',
      latitude: -12.156271,
      longitude: -44.9875447,
    })
    expect(gym.id).toEqual(expect.any(String))
  })
})
