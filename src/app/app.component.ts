import { Component } from '@angular/core';
import { Hero, heroes } from './heroo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  heroes = heroes;
  hero = this.heroes[0];
  condition = false;

  showSad = true;
}
