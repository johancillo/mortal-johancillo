export default class AlertIsDisable implements Error {
  name: string;
  message: string;
  stack?: string | undefined;
  constructor(status: string, retailChain: string) {
    this.name = 'ALERT_IS_DISABLE';
    this.message = `${status} with ${retailChain} is disable`;
  }
}
