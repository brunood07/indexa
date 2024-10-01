import { Routes } from '@angular/router';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'add-contact',
    component: NewContactComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
