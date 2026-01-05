import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-drag-and-drop-zone',
  imports: [ButtonComponent],
  templateUrl: './drag-and-drop-zone.html',
  styles: ``,
  host: {
    class: 'flex-1 w-full',
  },
})
export class DragAndDropZoneComponent {}
