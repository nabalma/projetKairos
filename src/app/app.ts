import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button';
import { UploadPageComponent } from './features/file-upload/components/upload-page/upload-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UploadPageComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projetKairos');
  gestionSkip() {}
}
