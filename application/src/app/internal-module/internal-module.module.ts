import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalModuleRoutingModule } from './internal-module-routing.module';
import {InternalModuleComponent} from './internal-module.component';

@NgModule({
  imports: [
    CommonModule,
    InternalModuleRoutingModule
  ],
  declarations: [InternalModuleComponent]
})
export class InternalModuleModule { }
