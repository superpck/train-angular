import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { ClarityModule } from '@clr/angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [LayoutComponent, MainPageComponent, AboutComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ClarityModule
  ]
})
export class MainModule { }
