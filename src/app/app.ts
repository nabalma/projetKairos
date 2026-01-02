import { Component, signal } from '@angular/core';
import { SkipButton } from './shared/components/skip-button/skip-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkipButton],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projetKairos');
  gestionSkip() {}
}
