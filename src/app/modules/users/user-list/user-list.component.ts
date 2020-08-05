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
        tel_mobile: null
      };
    }
    this.currentUser.password1 = '';
    this.currentUser.password2 = '';

    console.log(this.currentUser);
    this.modalEdit = true;
  }

  async onDelete(row) {
    const answer: any = this.alert.confirm(row.prename + row.fname + ' ' + row.lname, 'ยืนยันการลบข้อมูล');
    if (answer.value) {
      const deleteResult: any = await this.usersService.deleteUsers(row.uid);
      if (deleteResult.statusCode == 200) {
        this.alert.success('','ลบเรียบร้อย');
        await this.getUser();
      } else {
        this.alert.error(deleteResult.message,'มีปัญหาการลบข้อมูล');
      }
    }
  }

  async onSave() {
    if (this.currentUser.uid == 0 && !this.currentUser.password1) {
      this.alert.error('', 'กรุณาระบุรหัสผ่าน');
      return;
    }

    if (!this.currentUser.password1) {
      delete this.currentUser.password;
    } else {
      this.currentUser.password = this.currentUser.password1;
    }
    delete this.currentUser.password1;
    delete this.currentUser.password2;

    const saveResult: any = await this.usersService.saveUsers(this.currentUser);
    console.log(saveResult);
    if (saveResult.statusCode == 200) {
      this.modalEdit = false;
      await this.getUser();
    } else {
      this.alert.error(saveResult.message, 'บันทึกผิดพลาด');
    }
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
