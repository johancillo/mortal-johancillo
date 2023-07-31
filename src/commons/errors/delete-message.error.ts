export default class DeleteMessageError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(externalMessage: string) {
    this.name = 'Delete_MESSAGE_ERROR';
    this.message = ` while process the message: ${externalMessage}`;
  }
}
