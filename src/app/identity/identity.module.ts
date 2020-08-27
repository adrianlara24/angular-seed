import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { CoreModule } from '@core/core.module';

import { IdentityState } from './store/identity.state';

import { IdentityRoutingModule } from './identity-routing.module';

import { IdentityLayoutComponent } from './identity.layout.component';
import { IdentityLoginPageComponent } from './page/identity-login.page';

const components = [IdentityLayoutComponent, IdentityLoginPageComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([IdentityState]),
    CoreModule,
    IdentityRoutingModule,
  ],
  declarations: [...components],
  exports: [],
})
export class IdentityModule {}
