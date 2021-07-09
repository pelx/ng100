import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDocComponent } from './other-doc/other-doc.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { OTHER_ROUTES } from './other.routes';



@NgModule({
  declarations: [
    OtherDocComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(OTHER_ROUTES)
  ]
})
export class OtherModule { }
