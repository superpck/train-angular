import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private usersService: UsersService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }


  async login() {
    if (this.username && this.password) {
      const result: any = await this.usersService.login(this.username, this.password);
      console.log(result);
      if (result.statusCode == 200) {
        sessionStorage.setItem('myAppToken', result.token);
        this.route.navigate(['/main']);
      } else {
        alert('login fail!!');
      }
    }
  }

}
