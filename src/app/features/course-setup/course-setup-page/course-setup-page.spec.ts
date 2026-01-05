import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSetupPage } from './course-setup-page';

describe('CourseSetupPage', () => {
  let component: CourseSetupPage;
  let fixture: ComponentFixture<CourseSetupPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSetupPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSetupPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
