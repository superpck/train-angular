import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  demoCollapsible = true;
  userInfo: any = {};

  constructor(
    private route: Router,
    private mainService: MainService
  ) { }

  async ngOnInit() {
    this.userInfo = await this.mainService.checkToken();
    console.log(this.userInfo);
  }

}
