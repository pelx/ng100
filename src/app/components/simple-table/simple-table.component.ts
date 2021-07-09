import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  @Input() public tableData: any[] = [
    { author: 'Moshe Feldenkrais', title: 'Master Moves', date: '01/01/1980' },
    { author: 'Moshe Feldenkrais', title: 'Case of Nora', date: '01/01/1980' },
    { author: 'Moshe Feldenkrais', title: 'Potent Self', date: '01/01/1980' },
    { author: 'Moshe Feldenkrais', title: 'Awareness Through Movement', date: '01/01/1980' },
    { author: 'Moshe Feldenkrais', title: 'Elusive Obvious', date: '01/01/1980' },
  ];

  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
