import { Component, signal } from '@angular/core';
import { OnboardingComponent } from '../components/single/onboarding/onboarding';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OnboardingComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projetKairos');
  gestionSkip() {}
}
