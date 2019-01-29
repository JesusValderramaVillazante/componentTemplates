import { Component, ViewChild, ElementRef, Renderer2, OnInit, TemplateRef } from '@angular/core';
import { Hero, heroes } from './heroo';

interface People {
  id?: number;
  name?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('myButton') myButton: ElementRef;
  @ViewChild('e') ejm: TemplateRef<any>;
  totalPeople = 4;
  ctx = { numberOfPeople: this.totalPeople };

  heroes = heroes;
  hero = this.heroes[0];
  condition = false;
  showSad = true;
  people: People[] = [
    { id: 1, name: 'dani' },
    { id: 2, name: 'alex' },
    { id: 3, name: 'maria' },
    { id: 4, name: 'juan' },
    { id: 5, name: 'pepe' },
    { id: 6, name: 'mario' }
  ];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void { }

  addText() {
    let text = this.renderer.createText('my button');
    this.renderer.appendChild(this.myButton.nativeElement, text);
  }


}
