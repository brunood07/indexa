import { Routes } from '@angular/router';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  {
    path: 'add-contact',
    component: NewContactComponent
  },
  {
    path: 'add-contact/:id',
    component: NewContactComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
];
