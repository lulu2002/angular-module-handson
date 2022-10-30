import {Component, OnInit} from '@angular/core';
import {HomePageService} from "../../home-page/home-page.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  providers: []
})
export class AboutPageComponent implements OnInit {

  constructor(private homePageService: HomePageService) {
  }

  ngOnInit(): void {
  }

  sayHi() {
    return this.homePageService.hello()
  }

}
