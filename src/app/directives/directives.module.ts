import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directives-routes';
import { SharedModule } from '../shared/shared/shared.module';
import { DirectiveDocComponent } from './directive-doc/directive-doc.component';
import { DebounceClickDirective } from './debounce-click.directive';
import { RippleDirective } from './ripple.directive';
import { ScaleDirective } from './scale.directive';
import { CopyDirective } from './copy.directive';
import { LazyLoadImageDirective } from './lazy-load-image.directive';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [DirectiveDocComponent, DebounceClickDirective, RippleDirective, ScaleDirective, CopyDirective, LazyLoadImageDirective, AutoFocusDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
    SharedModule
  ],
  providers: [
    { provide: 'Navigator', useValue: navigator},
    { provide: 'Document', useValue: document},
    { provide: 'Window', useValue: window},
  ]
})
export class DirectivesModule { }
