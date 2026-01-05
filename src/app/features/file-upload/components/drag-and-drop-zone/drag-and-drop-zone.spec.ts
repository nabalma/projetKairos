import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropZone } from './drag-and-drop-zone';

describe('DragAndDropZone', () => {
  let component: DragAndDropZone;
  let fixture: ComponentFixture<DragAndDropZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragAndDropZone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
