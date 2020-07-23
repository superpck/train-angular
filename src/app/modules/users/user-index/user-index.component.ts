import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

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

  async onEdit(row) {
    this.editUser = Object.assign({}, row);
  }

  async onDelete(row) {

  }
}
