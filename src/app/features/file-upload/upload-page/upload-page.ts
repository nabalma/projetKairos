import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button';
import { DragAndDropZoneComponent } from '../components/drag-and-drop-zone/drag-and-drop-zone';
import { FileListComponent } from '../components/file-list/file-list';

@Component({
  selector: 'app-upload-page',
  imports: [DragAndDropZoneComponent, FileListComponent],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.css',
})
export class UploadPageComponent {}
