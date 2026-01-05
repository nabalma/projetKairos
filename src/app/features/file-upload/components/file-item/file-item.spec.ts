import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileItem } from './file-item';

describe('FileItem', () => {
  let component: FileItem;
  let fixture: ComponentFixture<FileItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
