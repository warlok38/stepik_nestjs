import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = (
  configService: ConfigService,
): MongooseModuleOptions => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb://' +
  configService.get('DATABASE_LOGIN') +
  ':' +
  configService.get('DATABASE_PASSWORD') +
  '@' +
  configService.get('DATABASE_HOST') +
  ':' +
  configService.get('DATABASE_PORT') +
  '/' +
  configService.get('DATABASE_AUTHDATABASE');

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
