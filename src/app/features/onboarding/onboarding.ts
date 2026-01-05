import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { UploadPageComponent } from '../file-upload/upload-page/upload-page';

@Component({
  selector: 'app-onboarding',
  imports: [ButtonComponent, UploadPageComponent],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css',
})
export class OnboardingComponent {}
