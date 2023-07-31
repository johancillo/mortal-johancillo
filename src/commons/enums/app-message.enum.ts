export enum AppMessages {
  CLOSE_APP_BY = 'Closing app by reason: ',
  MICROSERVICE_IS_LISTENING = 'Microservice is listening events from sqs...',
  SQS_START_DELETE = ' start remove queue with orderId: ',
  SQS_FINISH_DELETE = 'Finish remove queue with orderId:',
  SQS_START_PROCESS_MESSAGE = ' start process message with orderId: ',
  APP_CLOSED = 'APP CLOSED....',
  HTTP_SERVER_CLOSED = 'Http health server closed...',
  MESSAGE_PROCESSING = 'MESSAGE_PROCESSING',
  MESSAGE_PROCESSED = 'The message was processed with orderId: ',
}
