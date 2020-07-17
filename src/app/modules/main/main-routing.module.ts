import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path: 'main-page', component: MainPageComponent
      },
      {
        path: 'about', component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
