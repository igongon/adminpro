import { Injectable } from '@angular/core';
import { MenuItem } from '../../Interfaces/interfaces.index';

@Injectable()
export class SidebarService {

  menu: MenuItem[] = [
    {
      caption: 'Principal',
      iconClass: 'mdi mdi-gauge',
      submenu: [
        { caption: 'Dashboard', url: '/dashboard' },
        { caption: 'ProgressBar', url: '/progress' },
        { caption: 'Gráficas', url: '/graficas1' },
      ]
    }
  ];

  constructor() { }

}
