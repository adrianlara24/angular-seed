import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span class="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white">
      angular
    </span>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
