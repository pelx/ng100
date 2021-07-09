import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocComponent } from '../pipes/pipe-doc/pipe-doc.component';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes-routes';
import { TruncatePipe } from './truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FlattenPipe } from './flatten.pipe';
import { SharedModule } from '../shared/shared/shared.module';
import { RichTextPipe } from './rich-text.pipe';
import { SortByPipe } from './sort-by.pipe';
import { SortByKeyPipe } from './sort-by-key.pipe';
// import { FilterTermPipe } from './filter-term.pipe';


@NgModule({
  declarations: [PipeDocComponent, TruncatePipe, CreditCardFormatterPipe, FlattenPipe, RichTextPipe, SortByPipe, SortByKeyPipe,  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
    SharedModule
  ]
})
export class PipesModule { }


