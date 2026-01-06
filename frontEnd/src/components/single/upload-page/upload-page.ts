import { Component } from '@angular/core';
import { DragAndDropZoneComponent } from '../drag-and-drop-zone/drag-and-drop-zone';
import { FileListComponent } from '../file-list/file-list';

@Component({
  selector: 'app-upload-page',
  imports: [DragAndDropZoneComponent, FileListComponent],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.css',
})
export class UploadPageComponent {}
