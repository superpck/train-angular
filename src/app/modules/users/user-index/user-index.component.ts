import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';

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
    private userService: UsersService,
    private alert: AlertService
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

  async onEdit(row) {
    this.editUser = await Object.assign({}, row);
    this.editUser.dob.date = moment(this.editUser.dob.date).format('YYYY-MM-DD');
    this.modalEdit = true;
  }

  async onSave() {
    const answer = await this.alert.confirm('', 'ยืนยันการบันทึก?');
    if (answer.value) {
      console.log(this.editUser);
      this.currentUser = this.editUser;
      this.modalEdit = false;
    }
  }

  async onDelete(row) {
    const answer = await this.alert.confirm(row.name.title + row.name.first + ' ' + row.name.last, 'ยืนยันการลบข้อมูล?');
    if (answer.value) {
      this.alert.success('', 'ลบเรียบร้อย');
    }

  }
}
