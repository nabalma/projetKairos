import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileItemComponent } from './file-item';

describe('FileItem', () => {
  let component: FileItemComponent;
  let fixture: ComponentFixture<FileItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
