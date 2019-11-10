import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PopupModule { }
