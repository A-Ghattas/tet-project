import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {
}
