import { Component } from '@angular/core';
import { AlgorepsLayoutComponent } from '@algoreps/algoreps/layout';

@Component({
  selector: 'algoreps-root',
  imports: [ AlgorepsLayoutComponent ],
  standalone: true,
  template: '<algoreps-layout></algoreps-layout>',
})
export class AppComponent {}
