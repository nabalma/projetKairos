import { Component, input} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonRounded = 'sm' | 'md' | 'lg' | 'full';
type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})

export class ButtonComponent {

  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  rounded = input<ButtonRounded>('lg');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);

  get buttonClasses(): string {
    // Classes de base (toujours appliquées)
    const base = 'font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 active:scale-95 active:opacity-90';
    
    // Variants de couleur
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-hover',
      secondary: 'border border-text-disabled text-text-disabled hover:border-primary hover:text-primary bg-transparent',
      success: 'bg-success text-white hover:bg-success-dark',
      warning: 'bg-warning text-white hover:bg-warning-hover',
      danger: 'bg-danger text-white hover:bg-red-600',
      ghost: 'text-text-secondary hover:text-primary hover:bg-primary-soft'
    };
    
    // Tailles
    const sizes = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg'
    };
    
    // Border radius (arrondi)
    const roundness = {
      sm: 'rounded',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-full'
    };
  
    
    // Assembler toutes les classes
    return `
      ${base} 
      ${variants[this.variant()]} 
      ${sizes[this.size()]} 
      ${roundness[this.rounded()]}
    `.trim().replace(/\s+/g, ' ');
  }
}
