import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';
import { IdentityModule } from '@identity/identity.module';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeLayoutComponent } from './home.layout.component';

const components = [HomeLayoutComponent];

@NgModule({
  imports: [CommonModule, CoreModule, IdentityModule, SharedModule, HomeRoutingModule],
  declarations: [...components],
})
export class HomeModule {}
