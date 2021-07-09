import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { fadeInOutAnimation } from '../../other/animations/fade-in-out.animation';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: [ './simple-popup.component.scss' ],
  animations: [fadeInOutAnimation]
})
export class SimplePopupComponent implements OnInit {
  @Input() public message = '';

  public isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  public show(): void {
    this.isShown = true;

    const subscription = of().pipe(delay(3000)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }

}
