import { Component, Input, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() public quote = '';
  @Input() public author = '';
  @Input() public occupation = '';
  faQuoteLeft = faQuoteLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
