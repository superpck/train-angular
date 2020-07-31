import { Component, OnInit } from '@angular/core';
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
    private mainService: MainService
  ) { }

  async ngOnInit() {
    this.userInfo = await this.mainService.checkToken();
  }

}
