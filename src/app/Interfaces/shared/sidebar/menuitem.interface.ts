import { SubMenuItem } from './sidebar.index';

export interface MenuItem {
  caption: string;
  iconClass: string;
  submenu: SubMenuItem[];
}
