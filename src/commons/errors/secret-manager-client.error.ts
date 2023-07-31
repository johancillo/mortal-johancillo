export default class SecretManagerClientError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(message: string) {
    this.name = 'SECRET_MANAGER_CLIENT_ERROR';
    this.message = `Something was wrong in SecretManagerClient detail: ${message}`;
  }
}
