import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  searchColumn = 'fname';
  searchValue = '';
  usersList: any = [];
  loading = false;
  currentUser: any = {};
  modalEdit = false;

  constructor(
    private usersService: UsersService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async onEdit(row = null) {
    if (row) {
      this.currentUser = Object.assign({}, row);
    } else {
      this.currentUser = {
        uid: 0,
        prename: '',
        fname: '',
        lname: '',
        username: '',
        email: '',
        tel_office: null,
        tel_mobile: null,
        password1: null,
        password2: null,
      };
    }
    this.currentUser.password = '';

    console.log(this.currentUser);
    this.modalEdit = true;
  }

  async onDelete(row) {
    this.currentUser = Object.assign({}, row);
  }

  async onSave() {
    if (!this.currentUser.password) {
      delete this.currentUser.password;
    }

    const saveResult: any = await this.usersService.saveUsers(this.currentUser);
    console.log(saveResult);
    this.modalEdit = false;
    await this.getUser();
  }

  async getUser() {
    this.loading = true;
    const result: any = await this.usersService.getUsers(this.searchColumn, this.searchValue);
    if (result.statusCode == 200 && result.rows.length) {
      this.usersList = result.rows;
    } else {
      this.usersList = [];
      this.alert.error(this.searchColumn + '=' + this.searchValue, 'ไม่พบข้อมูล');
    }
    this.loading = false;
  }
}
