import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ClientComponent } from './client/client.component';
import { ClientCreateUpdateComponent } from './client/client-create-update/client-create-update.component';
import { UserComponent } from './user/user.component';
import { UserCreateUpdateComponent } from './user/user-create-update/user-create-update.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ClientComponent,
    UserComponent,
    UserCreateUpdateComponent,
    AccountSettingsComponent,
    ClientCreateUpdateComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ClientComponent,
    UserComponent,
    UserCreateUpdateComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
