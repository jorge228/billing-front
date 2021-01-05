import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme');
    let url: string;
    theme ? url = `./assets/css/colors/${localStorage.getItem('theme')}.css` : url = './assets/css/colors/megna-dark.css';
    this.linkTheme.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', theme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      if (element.getAttribute('data-theme') === localStorage.getItem('theme')) element.classList.add('working')
    });
  }

}
