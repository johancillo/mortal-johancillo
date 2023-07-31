import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlertDocument = HydratedDocument<AlertSettings>;

@Schema()
export class AlertSettings {
  @Prop()
  retailChain: string;

  @Prop()
  previousTime: number;

  @Prop()
  isActive: boolean;
}

export const AlertSettingSchema = SchemaFactory.createForClass(AlertSettings);
