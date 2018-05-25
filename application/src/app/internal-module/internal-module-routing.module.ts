import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InternalModuleComponent} from './internal-module.component';

const routes: Routes = [{
  path: 'routing-from-internal-module', component: InternalModuleComponent
},
  {
    path: '',
    redirectTo: 'routing-from-internal-module',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalModuleRoutingModule { }
