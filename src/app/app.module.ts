import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './modules/main/main.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './services/users.service';
import { AlertService } from './services/alert.service';
import { LoginModule } from './modules/login/login.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    MainModule, UsersModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [
    UsersService,
    AlertService,
    { provide: 'APIURL', useValue: environment.apiUrl },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
