import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Settings, Theme } from '../../Interfaces/Settings/settings.index';


@Injectable()
export class SettingsService {

  settings: Settings = {
    theme: {
      url: 'assets/css/colors/default-theme.css',
      name: 'default-theme'
    }
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.setTheme(this.settings.theme.name);
    }
  }

  getCurrentTheme(): Theme {
    return this.settings.theme;
  }

  setTheme(themeName: string) {
    this.settings.theme.name = themeName;
    this.settings.theme.url = `assets/css/colors/${themeName}.css`;
    this._document.getElementById('theme').href = this.settings.theme.url;
    this.saveSettings();
  }
}


