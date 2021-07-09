import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() public items: AccordionItem[] = [];
  // faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(item: AccordionItem): void{
    item.isExpanded = !item.isExpanded;
  }

}
