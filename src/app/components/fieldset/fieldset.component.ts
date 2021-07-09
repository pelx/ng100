import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: [ './fieldset.component.scss' ]
})
export class FieldsetComponent implements OnInit {
  @Input() public legend = '';
  @Input() public isOpen = true;

  faMinus = faMinus;
  faPlus = faPlus;


  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

}
