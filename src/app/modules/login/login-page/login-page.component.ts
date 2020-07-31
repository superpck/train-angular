import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }


  async login() {
    if (this.username && this.password) {
      const result: any = await this.usersService.login(this.usersService, this.password);
      if (result.statusCode == 200) {
        alert('login sucess');
      } else {
        alert('login fail!!');
      }
    }
  }

}
