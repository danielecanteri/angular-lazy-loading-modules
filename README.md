# angular-lazy-loading-modules

Create a new library to be included in the main application. Right now, with the cli, you have to create a new application and then a library inside that.

    ng new external-module --inline-style --inline-template --skip-tests

    cd external-module
    ng generate library external-module-lib

Edit projects\external-module-lib\src\lib\external-module-lib.module.ts, adding routing for the module and making routes exportable.

    export const routes: Routes = [
      {
        path: 'routing-from-internal-module', component: InternalModuleComponent
      },
      {
        path: '',
        redirectTo: 'routing-from-internal-module',
        pathMatch: 'full'
      }

Build the library

    ng build external-module-lib

Back to root folder

    cd ..

Create a new application. Link the library created and create a wrapper module to import it.

    ng new application --inline-style --inline-template --skip-tests --routing

    cd application
    npm install --save ..\external-module\dist\external-module-lib
    
    ng generate module external-module-wrapper

    ng generate module internal-module --routing
    ng generate component internal-module/internal-module --flat --module internal-module
    ng generate component home

Edit src\app\internal-module\internal-module-routing.module.ts, adding routing for the module

    {
      path: 'routing-from-internal-module', component: InternalModuleComponent
    },
    {
      path: '',
      redirectTo: 'routing-from-internal-module',
      pathMatch: 'full'
    }


Edit src\app\app-routing-module, adding routing for the application

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

Edit src\app\external-module-wrapper\external-module-wrapper.module.ts, adding import for the wrapper module

      ExternalModuleLibModule,
    // hack: register routes for imported module
    RouterModule.forChild(routes)

Edit src\app\app.component.ts, adding navigation to the main page

	    <nav>
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/internal-module">Internal module</a></li>
          <li><a routerLink="/external-module">External module</a></li>
        </ul>
    </nav>

Run

    ng serve