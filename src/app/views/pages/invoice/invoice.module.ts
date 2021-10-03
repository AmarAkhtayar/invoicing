import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceComponent} from './invoice.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: InvoiceComponent},
];

@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoiceModule {
}
