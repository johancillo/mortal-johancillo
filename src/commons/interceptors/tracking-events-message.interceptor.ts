// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';

// @Injectable()
// export class EventFilterInterceptor implements NestInterceptor {
//   mapperMessage(context) {
//     const message = 0;
//     return message;
//   }
//   intercept(context: ExecutionContext, next: CallHandler) {
//     const message = this.mapperMessage(context);

//      const filteredMessages = message.filter((message) => {
//       // Filter conditions
//       // Example: Filter messages with a specific attribute value
//       return message.attribute === 'value';
//     });
//     return next.handle().pipe(
//       map((response) => {
//         return response;
//       }),
//     );
//   }
// }
