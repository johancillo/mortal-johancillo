export default class BadRequestError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(message: string) {
    this.name = 'BAD_REQUEST_ERROR';
    this.message =
      'Required field are need it for some step, details: ' + message;
  }
}
