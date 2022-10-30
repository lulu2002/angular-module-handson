import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';



@NgModule({
  declarations: [
    HomePageComponent,
    CallToActionComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
