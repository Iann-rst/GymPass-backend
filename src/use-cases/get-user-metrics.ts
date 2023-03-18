import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface getUserMetricsUseCaseRequest {
  userId: string
}

interface getUserMetricsUseCaseResponse {
  checkInsCount: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: getUserMetricsUseCaseRequest): Promise<getUserMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
