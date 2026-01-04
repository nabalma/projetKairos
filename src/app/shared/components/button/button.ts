import { Component, input} from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'glass' | 'soft' | 'outline';
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
      primary:    'bg-primary text-white hover:bg-primary/90 active:bg-primary/80',
      secondary:  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      success:    'bg-success text-white hover:bg-success/90',
      warning:    'bg-warning text-warning-foreground hover:bg-warning/90',
      danger:     'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      ghost:      'hover:bg-accent hover:text-accent-foreground',
      outline:    'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      glass:      'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
      soft:       'bg-muted/70 border border-border/40 hover:bg-muted/90',
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
