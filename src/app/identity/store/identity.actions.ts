import { IdentityLoginModel } from '../model/identity-login.model';

export class IdentityLoginAction {
  static readonly type = '[IDENTITY] LOGIN_ACTION';
  constructor(public readonly payload: IdentityLoginModel) {}
}
