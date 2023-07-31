import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class AlertMongoDBServiceImpl implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      // autoCreate: true,
      uri: 'mongodb://alerts_history_daas_reg_db_stg:PdS4RJeDJPZBzT4RvJexV8mc@daas-reg-alerts-history-cluster.cqpeqdephwqv.us-east-1.docdb.amazonaws.com/daas_reg_alerts_history?retryWrites=true&w=majority',
      tlsCAFile: `${process.cwd()}/rds-ca-2019-root.pem`,
      tls: true,
      retryWrites: false,
      ignoreUndefined: true,
    };
  }
}
