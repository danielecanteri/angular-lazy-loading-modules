import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'internal-module',
    loadChildren: './internal-module/internal-module.module#InternalModuleModule'
  },
  {
    path: 'external-module',
    loadChildren: './external-module-wrapper/external-module-wrapper.module#ExternalModuleWrapperModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
            imports: [RouterModule.forRoot(routes, {useHash: true})],
            exports: [RouterModule]
          })
export class AppRoutingModule {
}
