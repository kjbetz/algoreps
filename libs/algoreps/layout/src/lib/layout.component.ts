import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'algoreps-layout',
  standalone: true,
  imports: [],
  template: ` <h1>Hello, Cisco!</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlgorepsLayoutComponent {}
