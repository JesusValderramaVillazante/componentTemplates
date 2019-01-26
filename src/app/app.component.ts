import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroImageUrl = './assets/images/hero.png';
  isSpecial: Boolean = true;

  onSave(event: KeyboardEvent) {
    const evtMsg = (<HTMLElement>event.target).textContent;
    alert(evtMsg);
    if (event) {
      event.stopPropagation();
    }
  }
}
