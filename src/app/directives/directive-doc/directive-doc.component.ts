import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-directive-doc',
  templateUrl: './directive-doc.component.html',
  styleUrls: ['./directive-doc.component.scss']
})
export class DirectiveDocComponent  {
  public src = 'https://images.unsplash.com/photo-1470164971321-eb5ac2c35f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=60';

  constructor(public sanitizer: DomSanitizer) {

  }

  public log(): void {
    console.log('Hello World');
  }

  get safeImg(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.src);
  }


}
