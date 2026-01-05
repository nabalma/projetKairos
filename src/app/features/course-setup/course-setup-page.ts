import { Component } from '@angular/core';
import { CourseFormComponent } from './components/course-form/course-form';
import { CourseListComponent } from './components/course-list/course-list';

@Component({
  selector: 'app-course-setup-page',
  imports: [CourseFormComponent, CourseListComponent],
  templateUrl: './course-setup-page.html',
  styleUrl: './course-setup-page.css',
})
export class CourseSetupPageComponent {}
