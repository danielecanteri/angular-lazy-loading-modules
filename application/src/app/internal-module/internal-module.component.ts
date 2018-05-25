import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-module',
  template: `
    <p>
      internal-module works!
    </p>
  `,
  styles: []
})
export class InternalModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
