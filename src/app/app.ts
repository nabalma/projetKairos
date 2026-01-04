import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projetKairos');
  gestionSkip() {}
}
