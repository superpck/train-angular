import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../main/layout/layout.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { PageNotFoundComponent } from '../main/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: 'users',
    component: LayoutComponent,
    children: [
      { path: '', component: UserIndexComponent },
      { path: '**', component: PageNotFoundComponent }

    ]
   } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
