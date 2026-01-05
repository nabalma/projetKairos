import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button';
import { FileItemComponent } from '../file-item/file-item';

@Component({
  selector: 'app-file-list',
  imports: [ButtonComponent, FileItemComponent],
  templateUrl: './file-list.html',
  styleUrl: './file-list.css',
  host: {
    class: 'flex-1 w-full',
  },
})
export class FileListComponent {}
