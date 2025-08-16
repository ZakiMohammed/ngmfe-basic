import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      loadRemoteModule('post-list', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'posts/:id',
    loadComponent: () =>
      loadRemoteModule('post-view', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
