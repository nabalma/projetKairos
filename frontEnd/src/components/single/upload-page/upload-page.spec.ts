import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPageComponent } from './upload-page';

describe('FileUpload', () => {
  let component: UploadPageComponent;
  let fixture: ComponentFixture<UploadPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
