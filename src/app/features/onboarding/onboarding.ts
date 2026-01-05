import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { UploadPageComponent } from '../file-upload/upload-page/upload-page';
import { CourseSetupPageComponent } from '../course-setup/course-setup-page';

@Component({
  selector: 'app-onboarding',
  imports: [ButtonComponent, CourseSetupPageComponent],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css',
})
export class OnboardingComponent {}
