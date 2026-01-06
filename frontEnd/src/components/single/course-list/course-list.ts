import { Component } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item';

@Component({
  selector: 'app-course-list',
  imports: [CourseItemComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseListComponent {}
