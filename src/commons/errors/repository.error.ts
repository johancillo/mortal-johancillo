export default class RepositoryError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(message: string, repositoryName: string, method: string) {
    this.name = 'REPOSITORY_ERROR';
    this.message = `Error in repository ${repositoryName} especifically ${method}, Detail: ${message}`;
  }
}
