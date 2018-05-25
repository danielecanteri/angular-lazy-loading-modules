import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-external-module-lib',
  template: `
    <p>
      external-module-lib works!
    </p>
  `,
  styles: []
})
export class ExternalModuleLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
