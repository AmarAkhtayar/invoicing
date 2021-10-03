import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './views/layouts/base/base.component';


const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./views/pages/invoice/invoice.module').then(m => m.InvoiceModule),
      },
    ],
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'top',
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
