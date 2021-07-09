import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fadeInOutAnimation } from '../animations/fade-in-out.animation';
import { slideRightAnimation } from '../animations/slide-right/slide-right.animation';

@Component({
  selector: 'app-other-doc',
  templateUrl: './other-doc.component.html',
  styleUrls: [ './other-doc.component.scss' ],
  animations: [fadeInOutAnimation, slideRightAnimation]
})
export class OtherDocComponent implements OnInit {
  public form: FormGroup;
  public selectedTab = 0;
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];


  public isInDOM = true;

  constructor() { }

  ngOnInit(): void {
  }

}
