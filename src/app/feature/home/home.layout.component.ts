import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="bg-white rounded shadow-lg flex-col p-4 mx-auto my-20 flex align-middle justify-center w-2/5">
      <h1 class="text-2xl font-bold mb-4">HOME PAGE</h1>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, tempore?</p>
    </div>
  `,
})
export class HomeLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
