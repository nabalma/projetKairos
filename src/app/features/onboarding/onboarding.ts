import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/components/button/button';
import { CourseSetupPageComponent } from '../course-setup/course-setup-page/course-setup-page';
import { UploadPageComponent } from '../file-upload/upload-page/upload-page';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CourseSetupPageComponent, UploadPageComponent],
  templateUrl: './onboarding.html',
  // Plus besoin du tableau 'animations' ni d'imports compliqués !
})
export class OnboardingComponent {
  // État réactif
  currentStep = signal(1);
  totalSteps = 3;

  nextStep() {
    if (this.currentStep() < this.totalSteps) this.currentStep.update((s) => s + 1);
  }

  prevStep() {
    if (this.currentStep() > 1) this.currentStep.update((s) => s - 1);
  }

  skip() {
    this.nextStep();
  }
}
