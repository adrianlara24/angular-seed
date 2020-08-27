import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@core/core.module';
import { IdentityModule } from '@identity/identity.module';

const components = [];
const directives = [];
const services = [];

@NgModule({
  imports: [CommonModule, RouterModule, CoreModule, IdentityModule],
  declarations: [...components, ...directives],
  exports: [...components, ...directives],
  providers: [...services],
})
export class SharedModule {}
