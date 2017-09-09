import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail',
    loadChildren: './+detail#DetailModule'
  },
  {
    path: 'barrel',
    loadChildren: './+barrel#BarrelModule'
  },
  {
    path: '**',
    component: NoContentComponent },
];
