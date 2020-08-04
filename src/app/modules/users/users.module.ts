import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserIndexComponent } from './user-index/user-index.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserIndexComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ClarityModule,
    FormsModule
  ]
})
export class UsersModule { }
