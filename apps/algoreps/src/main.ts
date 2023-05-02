import { enableProdMode } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { DashboardComponent } from '@algoreps/algoreps/dashboard';

const APP_ROUTES: Array<Route> = [
  { path: "/", component: DashboardComponent }
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
  ],
});
