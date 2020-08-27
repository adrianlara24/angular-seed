import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IdentityLayoutComponent } from './identity.layout.component';

import { IdentityLoginPageComponent } from './page/identity-login.page';

const routes: Routes = [
  {
    path: 'session',
    component: IdentityLayoutComponent,
    children: [{ path: '', component: IdentityLoginPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}
