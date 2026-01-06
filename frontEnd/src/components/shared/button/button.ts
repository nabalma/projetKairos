import { Component, input} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true, // Angular 17+
  imports: [],
  template: `
    <button [class]="buttonClasses" [type]="type()" [disabled]="disabled()">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  type = input<'button' | 'submit'>('button');
  disabled = input<boolean>(false);

  get buttonClasses(): string {
    const base = 'font-sans font-medium transition-all duration-200 inline-flex items-center justify-center rounded-[var(--radius-btn)] cursor-pointer active:scale-[0.98]';
    
    // Mapping des styles Deep Focus
    const variants = {
      // Le bouton Vert de l'image
      primary: 'bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:bg-[var(--color-primary-hover)] border border-transparent',
      
      // Le bouton Skip (Sombre, contour discret)
      secondary: 'bg-[var(--color-surface-hover)] text-text-secondary border border-border hover:border-text-secondary hover:text-text-primary',
      
      // Optionnel : totalement transparent
      ghost: 'bg-transparent text-text-secondary hover:text-text-primary'
    };
    
    const sizes = {
      small: 'px-3 py-1.5 text-xs',
      medium: 'px-5 py-2.5 text-sm', // Taille standard confortable
      large: 'px-8 py-3 text-base'
    };

    return `
      ${base} 
      ${variants[this.variant()]} 
      ${sizes[this.size()]} 
      ${this.disabled() ? 'opacity-50 cursor-not-allowed' : ''}
    `.trim().replace(/\s+/g, ' ');
  }
}