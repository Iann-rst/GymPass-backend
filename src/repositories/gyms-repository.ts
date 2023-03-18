import { Gym } from '@prisma/client'

export interface GymsRepository {
  findById(gymId: string): Promise<Gym | null>
}
