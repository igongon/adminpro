import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  @ViewChild('themeSelectors') selectors: ElementRef;

  constructor(private _settingsService: SettingsService) { }

  ngOnInit() {
      this.setCheckedMark(this._settingsService.settings.theme.name);
  }

  setThemeAndMark(themeName: string) {
    this._settingsService.setTheme(themeName);
    this.setCheckedMark(themeName);
  }

  setCheckedMark(themeName: string) {
    const lis = this.selectors.nativeElement.children;

    for (const li of lis) {
        if (li.firstChild.nodeName === 'A') {
            const link = li.children.item(0);

            if (link.getAttribute('data-theme') === themeName) {
                link.classList.add('working');
            } else {
                link.classList.remove('working');
            }
        }
    }
  }

}
