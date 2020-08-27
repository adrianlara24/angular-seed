import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdentityLoginAction } from '@identity/store/identity.actions';

@Component({
  template: `
    <form [formGroup]="form" class="flex flex-col shadow p-3 rounded w-2/5 m-auto mt-20 bg-white">
      <h1 class="text-lg text-center font-bold">LOGIN</h1>
      <input
        formControlName="email"
        class="border-gray-800 bg-gray-300 px-2 py-3 rounded m-4"
        type="text"
        placeholder="username"
      />
      <input
        formControlName="password"
        class="border-gray-800 bg-gray-300 px-2 py-3 rounded m-4"
        type="password"
        placeholder="password"
      />
      <button class="bg-primary px-2 py-3 mx-4 text-white font-bold rounded-md hover:bg-blue-700" (click)="login()">
        INGRESAR
      </button>
    </form>
  `,
})
export class IdentityLoginPageComponent implements OnInit {
  form: FormGroup;
  constructor(private _fb: FormBuilder, private _store: Store) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this._fb.group({
      email: [],
      password: [],
    });
  }

  login() {
    const payload = this.form.value;
    this._store.dispatch(new IdentityLoginAction(payload));
  }
}
