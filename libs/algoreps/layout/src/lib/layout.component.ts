import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'algoreps-layout',
  standalone: true,
  imports: [RouterModule, MenubarModule],
  template: ` 
    <article>
      <header>
        <p-menubar [model]="menuItems">
          <ng-template pTemplate="start">
            <a routerLink="/">AlgoReps</a>
          </ng-template>
        </p-menubar>
      </header>

      <main>
        <h1>Hello, Cisco!</h1>
        <router-outlet></router-outlet>
      </main>

      <footer></footer>
    </article>
            
  `,
  styles: [
    `
      article {
        min-height: 100%;
        display: grid;
        grid-template-rows: 4rem 1fr;
        grid-template-columns: 1fr;
      }

      main {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 2rem 1fr 2rem;
        margin-top: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlgorepsLayoutComponent {
    menuItems: Array<MenuItem> = [
    {
      label: 'AlgoReps',
      routerLink: ['/'],
      styleClass: 'main-menu',
    },
    ]
}
