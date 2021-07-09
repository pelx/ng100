import { Routes } from '@angular/router';
import { ServiceDocComponent } from '../services/service-doc/service-doc.component';

export const SERVICES_ROUTES: Routes = [
  { path: '', component: ServiceDocComponent },
  { path: ':id', component: ServiceDocComponent },
];
