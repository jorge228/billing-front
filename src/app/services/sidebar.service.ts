import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Clients', url: 'clients/page/0' },
        { title: 'Users', url: 'users' },
      ]
    }
  ];

  constructor() { }
}
