import {
  Catch,
  Logger,
  HttpStatus,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';

import ConflictError from '../errors/conflict.error';
import ResourceNotFound from '../errors/resources-not-found.error';
import BadRequestError from '../errors/bad-request.error';
import OperationTypeNotFound from '../errors/operation-type-not-found.error';

@Catch()
export class HttpErrorException implements ExceptionFilter {
  errors;
  constructor() {
    this.errors = [
      {
        instance: ResourceNotFound,
        statusCode: HttpStatus.NOT_FOUND,
      },
      {
        instance: ConflictError,
        statusCode: HttpStatus.CONFLICT,
      },
      {
        instance: BadRequestError,
        statusCode: HttpStatus.BAD_REQUEST,
      },
      {
        instance: OperationTypeNotFound,
        statusCode: HttpStatus.BAD_REQUEST,
      },
    ];
  }

  handleError(currentError: Error) {
    const error = this.errors.find(
      (error) => currentError instanceof error.instance,
    );
    if (!error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Ups algo salio mal',
      };
    }
    return { status: error.statusCode, message: currentError.message };
  }

  catch(error: Error | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let statusCode;
    let message;

    Logger.error(error.message);
    if (error instanceof HttpException) {
      message = error['response']['message'];
      statusCode = HttpStatus.BAD_REQUEST;
    } else {
      const errorInfo = this.handleError(error);
      statusCode = errorInfo.status;
      message = errorInfo.message;
    }

    const errorResponse = {
      timestamp: new Date().toLocaleTimeString(),
      message,
    };

    response.status(statusCode).json(errorResponse);
  }
}
