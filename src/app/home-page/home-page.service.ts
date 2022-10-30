import { Injectable } from '@angular/core';
import {HomePageModule} from "./home-page.module";

@Injectable({
  providedIn: HomePageModule
})
export class HomePageService {

  constructor() { }


  hello() {
    return "hello"
  }
}
