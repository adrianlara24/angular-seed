import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IdentityLoginModel } from '../model/identity-login.model';

@Injectable({ providedIn: 'root' })
export class IdentityApiService {
  constructor(private _http: HttpClient) {}

  login(payload: IdentityLoginModel) {
    return of(true).pipe(delay(500));
  }
}
