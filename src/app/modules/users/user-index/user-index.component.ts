import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  users: any = [];
  currentUser: any = {};
  editUser: any = {};
  loading = false;
  modalEdit = false;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser() {
    this.loading = true;
    const result: any = await this.userService.getUser();
    if (result['results']) {
      this.users = result['results'];
    } else {
      this.users = [];
    }
    this.loading = false;
  }

  async onEdit(row: any) {
    this.editUser = row;
    this.editUser.dob.date = moment(this.editUser.dob.date).format('YYYY-MM-DD');
    this.modalEdit = true;
  }

  async onSave() {
    console.log(this.editUser);
    this.modalEdit = false;
  }

  async onDelete(row) {

  }
}
