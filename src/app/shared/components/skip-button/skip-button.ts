import { Component } from '@angular/core';

@Component({
  templateUrl: './skip-button.html',
  selector: 'skip-button',
  standalone: true,
})
export class SkipButton {
  label: string = 'Skip';
  nombredeSurvols: number = 0;
  
}
