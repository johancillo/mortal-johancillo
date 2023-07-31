export default class OperationTypeNotFound implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(operationType: string) {
    this.name = 'OPERATION_TYPE_NOT_FOUND';
    this.message = `Operation type: ${operationType} not found`;
  }
}
