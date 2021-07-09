import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { BannerCutOutComponent } from 'src/app/components/banner-cut-out/banner-cut-out.component';
import { TopOfPageComponent } from 'src/app/components/top-of-page/top-of-page.component';
import { FilterTermPipe } from '../../pipes/filter-term.pipe';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NavComponent } from '../../components/nav/nav.component';





@NgModule({
  declarations: [
    CardComponent,
    BannerCutOutComponent,
    TopOfPageComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent,
    ModalComponent,
    ToolbarComponent,
    NavComponent

  ],
  exports: [
    CardComponent,
    BannerCutOutComponent,
    TopOfPageComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent,
    ModalComponent,
    ToolbarComponent,
    NavComponent

  ],
  imports: [
    CommonModule,

  ]
})
export class SharedModule {
  // constructor(public library: FaIconLibrary) {
  //   library.addIcons(faInfoCircle, faChevronDown, faChevronUp, faStar, faStarHalfAlt, star, faCcAmex);
  // }
 }


