import { IdentityLoginModel } from '../model/identity-login.model';

export class IdentityLoginAction {
  static readonly type = '[IDENTITY] LOGIN_ACTION';
  constructor(public readonly payload: IdentityLoginModel) {}
}

export class IdentityLogoutAction {
  static readonly type = '[IDENTITY] LOGOUT_ACTION';
}
