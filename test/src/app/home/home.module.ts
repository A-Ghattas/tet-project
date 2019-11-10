import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NewslaterComponent } from './newslater/newslater.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NewslaterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
