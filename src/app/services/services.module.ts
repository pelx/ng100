import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_ROUTES } from './services-routes';
import { ServiceDocComponent } from './service-doc/service-doc.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { LocalStorageService } from './local-storage.service';




@NgModule({
  declarations: [ ServiceDocComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
    SharedModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    LocalStorageService,
    { provide: 'LocalStorage', useValue: window.localStorage }
  ]
})
export class ServicesModule { }

