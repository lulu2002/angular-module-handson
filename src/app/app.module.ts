import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomePageModule} from "./home-page/home-page.module";
import {AboutPageModule} from "./about-page/about-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
