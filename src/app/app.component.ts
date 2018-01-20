import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor (private _settings: SettingsService) {
    init_plugins();
    console.log('iniciado');
  }
}


