export class MaxNumberOffCheckInsError extends Error {
  constructor() {
    super('Max number of check-ins reached.')
  }
}
