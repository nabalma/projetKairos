import { Component } from '@angular/core';

@Component({
  templateUrl: './skip-button.html',
  selector: 'skip-button',
  standalone: true,
})
export class SkipButton {
  label: string = 'Skip';
  nombredeSurvols: number = 0;

  passerALaPageSuivante(): void {
    console.log('Bouton cliqué, passer à la page suivante');
  }

  survoler(): void {
    this.nombredeSurvols++;
    console.log('Bouton survolé');
  }
}
