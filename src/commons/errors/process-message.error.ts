export default class ProcessMessageError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(externalMessage: string) {
    this.name = 'PROCESS_MESSAGE_ERROR';
    this.message = ` while process the message: ${externalMessage}`;
  }
}
