import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
import { TitleService } from './services/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public constructor(private titleService: TitleService) {
    // this.titleService.setTitle('100 Angular Challenge');
  }

  ngOnInit(): void {
    this.titleService.initializetitleService();
  }

}
