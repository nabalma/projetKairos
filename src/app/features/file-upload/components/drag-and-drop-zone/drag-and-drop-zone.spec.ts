import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropZoneComponent } from './drag-and-drop-zone';

describe('DragAndDropZone', () => {
  let component: DragAndDropZoneComponent;
  let fixture: ComponentFixture<DragAndDropZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragAndDropZoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DragAndDropZoneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
