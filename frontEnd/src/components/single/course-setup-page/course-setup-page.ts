import { Component } from '@angular/core';
import { CourseFormComponent } from '../course-form/course-form';
import { CourseListComponent } from '../course-list/course-list';

@Component({
  selector: 'app-course-setup-page',
  imports: [CourseFormComponent, CourseListComponent],
  templateUrl: './course-setup-page.html',
  styleUrl: './course-setup-page.css',
})
export class CourseSetupPageComponent {}
