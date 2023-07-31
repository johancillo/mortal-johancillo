export default class BodyParsingError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(externalMessage: string) {
    this.name = 'BODY_PARSING_FAILED';
    this.message = `Something wrong parsing body detial: ${externalMessage}`;
  }
}
