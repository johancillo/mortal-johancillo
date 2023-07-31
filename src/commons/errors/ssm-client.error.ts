export default class SSMClientError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(actions, message: string) {
    this.name = 'SSM_CLIENT_ERROR';
    this.message = `Something was wrong in SSMCLIENT while make ${actions} detail: ${message}`;
  }
}
