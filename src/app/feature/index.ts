import { Routes } from '@angular/router';
import { IdentityAuthGuard } from '@identity/service/identity-auth.guard';

export const features: Routes = [
  {
    path: '',
    canActivate: [IdentityAuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
