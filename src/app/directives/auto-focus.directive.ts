import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {


  constructor(public elementRef: ElementRef<HTMLInputElement>) { }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    }, 250);
  }

}
