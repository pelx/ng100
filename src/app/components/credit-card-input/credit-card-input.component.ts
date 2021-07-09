import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent  {
  private readonly = false;

  @Input() public creditCardNumber = '';
  @Input() public set isReadonly(value: boolean) {
    this.readonly = value;
    this.creditCardNumber =  this.readonly
    ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
  }


  public get isReadonly(): boolean {
    return this.readonly;
  }

  constructor() {
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return onlyLast4Shown.join('-');
  }
}
