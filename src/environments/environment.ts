import { CoreConfigModel } from '@core/model/core-config.model';

const config: CoreConfigModel = {
  url: 'http://localhost:3000',
};

export const environment = {
  production: false,
  config,
};
