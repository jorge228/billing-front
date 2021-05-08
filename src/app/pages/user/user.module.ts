import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';



@NgModule({
  declarations: [UserComponent, UserCreateUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
