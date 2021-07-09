import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { PillType } from '../pill/pill-type.enum';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: [ './pill-filters.component.scss' ]
})
export class PillFiltersComponent implements OnInit {
  // private pillLabels: string[];
  public unselectedPills: string[] = [];
  public selectedPills: string[] = [];

  @Input() set pills(value: string[]) {
    // this.pillLabels = value;
    this.unselectedPills = value;
  }

  public selected = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [ selectedPill ] = this.unselectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }

  public removeFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [ selectedPill ] = this.selectedPills.splice(selectedIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
  }


}
