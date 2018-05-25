import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExternalModuleLibModule, routes} from 'external-module-lib';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ExternalModuleLibModule,
    // hack: register routes for imported module
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ExternalModuleWrapperModule { }
