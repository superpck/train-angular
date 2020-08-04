import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchColumn = '';
  searchValue = '';

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser(){
    const result: any = await this.usersService.getUsers(this.searchColumn, this.searchValue);
    console.log(result);
  }
}
