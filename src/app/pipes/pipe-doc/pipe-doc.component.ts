import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-doc',
  templateUrl: './pipe-doc.component.html',
  styleUrls: [ './pipe-doc.component.scss' ]
})
export class PipeDocComponent {
  public flattenData = [ 1, 2, [ 3 ], [ 4, [ 5, 6, [ 7 ] ] ] ];
  public html = '<a href="https://www.YouTube.com/Codingtutorials360" target="blank">YouTube </a>';

  public stringArray: string[] = [ 'Courses', 'YouTube', 'Twitter', 'LinkedIn' ];
  public objectArray: { [ key: string ]: string; }[] = [
    { content: 'Courses' },
    { content: 'YouTube' },
    { content: 'Twitter' },
    { content: 'LinkedIn' },
  ];

  constructor() { }


  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
    console.log(this.flattenData);
  }
  public reassignFlatten(): void {
    this.flattenData = [ ...this.flattenData ];
    console.log(this.flattenData);
  }
}
