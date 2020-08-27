import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeLayoutComponent } from './home.layout.component';

const routes: Routes = [{ path: '', component: HomeLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
