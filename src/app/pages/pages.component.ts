import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public anyo = new Date().getFullYear();

  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
