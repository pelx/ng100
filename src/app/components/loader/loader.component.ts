import { LoaderType } from './loader-type.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;

  public LoaderType = LoaderType;

  public get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = `.\0\0`;

  constructor() { }

  ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = `..\0`;
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = `...`;
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = `.\0\0`;
          currentStep = 0;
          break;

      }
    }, 500);
  }

}
