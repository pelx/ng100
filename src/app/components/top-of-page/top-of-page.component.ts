import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent  {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yCoordinate = Math.ceil( this.viewportScroller.getScrollPosition()[ 1 ] );
    const scrHeight = window.innerHeight;
    const clientHeight = document.body.clientHeight;
    this.isShown = (clientHeight - scrHeight) <= yCoordinate;
    // console.log(this.isShown);
    // console.log(clientHeight, scrHeight, yCoordinate);
  }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}


