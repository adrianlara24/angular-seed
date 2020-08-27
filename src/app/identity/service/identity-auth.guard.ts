import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Store } from '@ngxs/store';

import { IdentityState } from '../store/identity.state';

@Injectable({ providedIn: 'root' })
export class IdentityAuthGuard implements CanActivate {
  constructor(private _router: Router, private _store: Store) {}

  canActivate() {
    const isAuth = this._store.selectSnapshot(IdentityState.isAuth);
    if (!isAuth) {
      return this._router.navigate(['/', 'session', 'login']);
    }

    return isAuth;
  }
}
