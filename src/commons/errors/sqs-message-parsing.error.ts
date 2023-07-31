export default class SQSMessgeParsingError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(externalMessage: string) {
    this.name = 'SQS_MESSAGE_PARSING_FAILED';
    this.message = `Something wrong parsing SQS message: ${externalMessage}`;
  }
}
