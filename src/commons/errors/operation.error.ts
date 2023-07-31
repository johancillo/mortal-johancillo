export default class OperationError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(message: string, operationName: string) {
    this.name = 'OPERATION_ERROR';
    this.message = `Error in operation ${operationName}, Detail: ${message}`;
  }
}
