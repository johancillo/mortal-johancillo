import { AlertSettings } from 'src/mortal-kombat/domain/schemas/alert.schema';

export abstract class AlertSettingsRepository {
  abstract findAll(): Promise<AlertSettings[]>;
  abstract findOne(message: any): Promise<AlertSettings>;
}
