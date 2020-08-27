import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { State, Selector, Action, StateContext } from '@ngxs/store';

import { of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

import * as actions from './identity.actions';

import { IdentityApiService } from '../service/identity-api.service';

export interface IdentityStateModel {
  isAuth: boolean;
  token?: string;
  user?: any;
}

@State<IdentityStateModel>({
  name: 'identity',
  defaults: {
    isAuth: false,
  },
})
@Injectable()
export class IdentityState {
  @Selector()
  static isAuth(state: IdentityStateModel) {
    return state.isAuth;
  }

  @Selector()
  static token(state: IdentityStateModel) {
    return state.token;
  }

  @Selector()
  static user(state: IdentityStateModel) {
    return state.user;
  }

  constructor(private _router: Router, private _api: IdentityApiService) {}

  @Action(actions.IdentityLoginAction)
  loginAction({ patchState }: StateContext<IdentityStateModel>, { payload }: actions.IdentityLoginAction) {
    return this._api.login(payload).pipe(
      tap((_) => patchState({ isAuth: true })),
      switchMap((response) => {
        if (!response) {
          return of(response);
        }
        return this._router.navigate(['/']);
      })
    );
  }

  @Action(actions.IdentityLogoutAction)
  logoutAction({ patchState }: StateContext<IdentityStateModel>) {
    patchState({ isAuth: false, token: undefined, user: undefined });
    return this._router.navigate(['/', 'session', 'login']);
  }
}
