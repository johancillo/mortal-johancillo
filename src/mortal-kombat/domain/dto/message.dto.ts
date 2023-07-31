import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MessageDTO {
  @IsNotEmpty()
  @ApiProperty()
  externalSystemOrderId: string;

  @IsNotEmpty()
  @ApiProperty()
  retailChain: string;

  @IsNotEmpty()
  @ApiProperty()
  alertType: string;

  constructor({
    externalSystemOrderId,
    retailChain,
    alertType,
  }: {
    externalSystemOrderId: string;
    retailChain: string;
    alertType: string;
  }) {
    this.externalSystemOrderId = externalSystemOrderId;
    this.retailChain = retailChain;
    this.alertType = alertType;
  }
}
