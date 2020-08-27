import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { CONFIG } from '@core/token/config.token';
import { CoreConfigModel } from '@core/model/core-config.model';

import { IdentityLoginModel } from '../model/identity-login.model';

@Injectable({ providedIn: 'root' })
export class IdentityApiService {
  constructor(@Inject(CONFIG) private _config: CoreConfigModel, private _http: HttpClient) {}

  login(payload: IdentityLoginModel) {
    return of(true).pipe(delay(500));
  }
}
