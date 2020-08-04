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
  usersList: any = [];
  loading = false;
  currentUser: any = {};
  modalEdit = false;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async onEdit(row){
    this.currentUser = Object.assign({}, row);
    console.log(this.currentUser);
    this.modalEdit = true;
  }

  async onDelete(row){
    this.currentUser = Object.assign({}, row);
  }

  async onSave(){
  }

  async getUser(){
    this.loading = true;
    const result: any = await this.usersService.getUsers(this.searchColumn, this.searchValue);
    if (result.statusCode == 200) {
      this.usersList = result.rows;
    } else {
      this.usersList = [];
    }
    this.loading = false;
  }
}
