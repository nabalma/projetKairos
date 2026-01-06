import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button';


@Component({
  selector: 'app-file-item',
  imports: [ButtonComponent],
  templateUrl: './file-item.html',
  styleUrl: './file-item.css',
})
export class FileItemComponent {}
