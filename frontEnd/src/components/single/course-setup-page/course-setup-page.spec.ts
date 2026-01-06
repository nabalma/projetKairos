import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSetupPageComponent } from './course-setup-page';

describe('CourseSetupPage', () => {
  let component: CourseSetupPageComponent;
  let fixture: ComponentFixture<CourseSetupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSetupPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSetupPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
