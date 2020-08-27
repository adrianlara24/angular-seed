import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { features } from './feature';

import { AppLayoutComponent } from './app.layout';

const routes: Routes = [{ path: '', component: AppLayoutComponent, children: [...features] }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
