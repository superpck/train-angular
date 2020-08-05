import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/services/alert.service';

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
    private mainService: MainService,
    private route: Router,
    private toast: ToastrService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
  }


  async login() {
    if (this.username && this.password) {
      const result: any = await this.usersService.login(this.username, this.password);

      if (result.statusCode == 200) {
        const tokenName = await this.mainService.tokenName;
        sessionStorage.setItem(tokenName, result.token);
        this.toast.success('', 'ยินดีต้อนรับ');
        this.route.navigate(['/main']);
      } else {
        this.alert.error(result.message, 'Login fail!');
      }
    }
  }

}
