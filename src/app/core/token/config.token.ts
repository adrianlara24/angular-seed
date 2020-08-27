import { InjectionToken } from '@angular/core';
import { CoreConfigModel } from '@core/model/core-config.model';

export const CONFIG = new InjectionToken<CoreConfigModel>('CORE_CONFIG_TOKEN');
