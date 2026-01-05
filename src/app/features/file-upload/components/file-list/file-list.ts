import { Component } from '@angular/core';
import { FileItemComponent } from '../file-item/file-item';

@Component({
  selector: 'app-file-list',
  imports: [FileItemComponent],
  templateUrl: './file-list.html',
  styleUrl: './file-list.css',
  host: {
    class: 'flex-1 w-full',
  },
})
export class FileListComponent {}
