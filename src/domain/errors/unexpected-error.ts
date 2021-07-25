export class UnexpectedError extends Error {
  constructor() {
    super('Erro ao autenticar. Tente novamente.');
    this.name = 'UnexpectedError';
  }
}
