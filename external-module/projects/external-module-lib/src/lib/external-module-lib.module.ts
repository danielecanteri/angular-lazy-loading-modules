import { NgModule } from '@angular/core';
import { ExternalModuleLibComponent } from './external-module-lib.component';
import {RouterModule, Routes} from '@angular/router';

// hack: export this so parent module can redefine routs
export const routes: Routes = [
  {
    path: 'routing-from-external-module', component: ExternalModuleLibComponent
  },
  {
    path: '',
    redirectTo: 'routing-from-external-module',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
      // doesn't work at this moment
      RouterModule.forChild(routes)
  ],
  declarations: [ExternalModuleLibComponent],
  exports: [RouterModule]
})
export class ExternalModuleLibModule { }
