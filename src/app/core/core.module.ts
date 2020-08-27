import { NgModule, ModuleWithProviders, Type, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreConfigModel } from './model/core-config.model';

const components = [];
const directives = [];
const services = [];

@NgModule({
  imports: [CommonModule],
  declarations: [...components, ...directives],
  exports: [...components, ...directives],
})
export class CoreModule implements ModuleWithProviders<CoreModule> {
  ngModule: Type<CoreModule>;
  providers?: Provider[];

  static forRoot(config: CoreConfigModel): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...services],
    };
  }
}
