export default class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly body: string
  ) {
    super(`${statusCode} ${body}`);
  }
}
